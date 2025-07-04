import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { MdUpgrade } from "react-icons/md";
import { FONTS } from "../../constants/uiConstants";
import { getProfile, updateProfile } from "./services";
import {
  fetchCountries,
  fetchState,
} from "../../features/ServiceCenter/externalapi";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  contact_info: {
    phoneNumber: string;
    address1: string;
    country: string;
    state: string;
    city: string;
  };
  gender: string;
  image: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
};

const ProfileEditSettings: React.FC = () => {
  const [profile, setProfile] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    contact_info: {
      phoneNumber: "",
      address1: "",
      country: "",
      state: "",
      city: "",
    },
    gender: "",
    image: "",
    facebook: "",
    twitter: "",
    youtube: "",
  });

  const fetchData = async () => {
    const response = await getProfile();
    console.log("response data", response);
    setProfile(response.data);
    console.log("respnse", response.data);
  };

  useEffect(() => {
    fetchData();
    getStates();
  }, []);

  const [state, setState] = useState<any[]>([]);
  const [city, setCity] = useState<any[]>([]);

  const getStates = async () => {
    const response = await fetchState();
    if (response) {
      setState(response.data);
    } else {
      setState([]);
    }
  };

  const getCity = async () => {
    const states: any = state.filter(
      (item) => item.name === formik.values.contact_info.state
    );
    const response = await fetchCountries(states[0].iso2);
    if (response && response.data) {
      setCity(response.data);
    } else {
      setCity([]);
    }
  };

  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: profile,
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("gender", values.gender);

      // Nested object - serialize to JSON
      formData.append("contact_info", JSON.stringify(values.contact_info));
      console.log("contactinfoss", values.contact_info);

      if (values.image) {
        formData.append("image", values.image);
      }

      if (values.facebook) formData.append("facebook", values.facebook);
      if (values.twitter) formData.append("twitter", values.twitter);
      if (values.youtube) formData.append("youtube", values.youtube);

      try {
        console.log("formdata", formData);
        const response = await updateProfile(formData);

        if (!response) throw new Error("Failed to submit");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err.message);
      }
    },
  });

  useEffect(() => {
    if (formik.values.contact_info.state && state.length > 0) {
      getCity();
    }
  }, [formik.values.contact_info.state, state]);

  const inputClass =
    "bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5 w-full";

  return (
    <div className="p-5" style={{ fontFamily: FONTS.header.fontFamily }}>
      <h1 className="font-bold text-2xl">Profile</h1>
      <h6>Update your photo and personal details here</h6>

      <form onSubmit={formik.handleSubmit} className="mt-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Input fields */}
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="text"
              name="contact_info.phoneNumber"
              value={formik.values.contact_info.phoneNumber}
              onChange={formik.handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Address</label>
            <input
              type="text"
              name="contact_info.address1"
              value={formik.values.contact_info.address1}
              onChange={formik.handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              name="contact_info.country"
              value={formik.values.contact_info.country}
              onChange={formik.handleChange}
              className={inputClass}
            >
              <option value="India">India</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <select
              name="contact_info.state"
              value={formik.values.contact_info.state}
              onChange={formik.handleChange}
              className={inputClass}
            >
              <option value="contact_info.state">Select a state</option>
              {state.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <select
              name="contact_info.city"
              value={formik.values.contact_info.city}
              onChange={formik.handleChange}
              className={inputClass}
            >
              <option value="contact_info.city">Select a city</option>
              {city.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              className={inputClass}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Image upload */}
        <div className="mt-10">
          <h1 className="font-bold text-2xl">Your Photo</h1>
          <div className="flex items-center justify-center w-full mt-8">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
              </div>
              <input
                id="dropzone-file"
                type="text"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.currentTarget.files && e.currentTarget.files[0]) {
                    formik.setFieldValue("image", e.currentTarget.files[0]);
                  }
                }}
              />
            </label>
          </div>

          {formik.values.image && (
            <div className="mt-4">
              <p className="text-sm text-gray-700">
                Selected File: {formik.values.image}
              </p>
            </div>
          )}
        </div>

        {/* Socials */}
        {/* <div className="mt-10">
                    <h1 className="font-bold text-2xl">Social Profiles</h1>
                    <div className="grid grid-cols-2 gap-8 mt-3">
                        {(["facebook", "twitter", "youtube"] as const).map((field) => (
                            <div key={field}>
                                <label className="block mb-2 text-sm font-medium capitalize">{field}</label>
                                <input
                                    type="text"
                                    name={field}
                                    placeholder={`https://${field}.com/your-profile`}
                                    value={formik.values[field] || ""}
                                    onChange={formik.handleChange}
                                    className={inputClass}
                                />
                            </div>
                        ))}
                    </div>
                </div> */}

        {/* Submit */}
        <div className="flex gap-10 mt-10">
          <button
            type="button"
            className="w-20 h-10 rounded-3xl text-white"
            style={{ backgroundColor: "#9b111e" }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 rounded-3xl text-white"
            style={{ backgroundColor: "#9b111e" }}
          >
            <MdUpgrade className="text-2xl" />
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditSettings;
