import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { getProfile, updateProfile } from "../../features/Auth/service";
import { FONTS } from "../../constants/uiConstants";
import { MdUpgrade } from "react-icons/md";

const ProfileEditSettings = () => {
    const [initialValues, setInitialValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact_info: {
            phoneNumber: "",
            address: "",
            country: "",
        },
        dob: "",
        gender: "",
        company: "",
        website: "",
        bio: ""
    });

    const [userId, setUserId] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const data: any = await getProfile({});
            if (data?.id) setUserId(data.id);
            setInitialValues({
                firstName: data?.firstName || "",
                lastName: data?.lastName || "",
                email: data?.email || "",
                contact_info: {
                    phoneNumber: data?.phone || "",
                    address: data?.address || "",
                    country: data?.country || "",
                },
                dob: data?.dob || "",
                gender: data?.gender || "",
                company: data?.company || "",
                website: data?.website || "",
                bio: data?.addBio || "",
            });
        };
        fetchProfile();
    }, []);

    const handleSubmit = async (values: any) => {
        await updateProfile(userId, values);
    };

    return (
        <div className="p-5" style={{ fontFamily: FONTS.header.fontFamily }}>
            <div>
                <h1 className="font-bold text-2xl">Profile</h1>
                <h6>Update your photo and personal details here</h6>
            </div>

            <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form className="mt-6">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="firstName">First name</label>
                                <Field type="text" name="firstName" placeholder="John" id="firstName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last name</label>
                                <Field type="text" name="lastName" placeholder="DuraiRaj" id="lastName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required />
                            </div>
                            <div>
                                <label htmlFor="email" >Email Address</label>
                                <Field type="email" name="email" placeholder="John@gmail.com" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required />
                            </div>
                            <div>
                                <label htmlFor="phone" >Phone Number</label>
                                <Field type="number" name="phone" placeholder="0123456789" id="phoneNumber"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required />
                            </div>
                            <div>
                                <label htmlFor="address" >Address</label>
                                <Field type="text" name="address" placeholder="Door no, Address" id="address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required />
                            </div>
                            <div>
                                <label htmlFor="country" >Country</label>
                                <Field as="select" name="country" id="country"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required>
                                    <option>Choose a country</option>
                                    <option value="London">London</option>
                                    <option value="Switcherland">Switcherland</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Paris">Paris</option>
                                    <option value="Japan">Japan</option>
                                    <option value="America">America</option>
                                    <option value="Antartica">Antartica</option>
                                    <option value="Melbourne">Melbourne</option>
                                </Field>
                            </div>
                            <div>
                                <label htmlFor="dob" >Date of Birth</label>
                                <Field type="date" name="dob" id="dob"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" />
                            </div>
                            <div>
                                <label htmlFor="gender" >Gender</label>
                                <Field as="select" name="gender" id="gender"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required>
                                    <option>Choose a Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Field>
                            </div>
                            <div>
                                <label htmlFor="company" >Company Name</label>
                                <Field type="text" name="company" placeholder="Company name" id="company"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" required />
                            </div>
                            <div>
                                <label htmlFor="website" >Company Website</label>
                                <Field type="text" name="website" placeholder="http://companyname.com/" id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <label htmlFor="bio" >Add your bio</label>
                            <Field as="textarea" name="bio" placeholder="John" id="bio"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4 mt-6 h-32" />
                        </div>

                        <div className="mt-10">
                            <h1 className="font-bold text-2xl">Your Photo</h1>
                            <h3>This will be displayed on profile</h3>
                            <div className="flex items-center justify-center w-full mt-8">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>

                        </div>

                        <div className="flex gap-10 mt-10">
                            <button type="button" className="w-20 h-10 rounded-lg text-white" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>Cancel</button>
                            <button type="submit" className="flex rounded-lg h-10 w-auto pt-2 pr-2 text-white" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
                                <MdUpgrade className="text-2xl" /> Update
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProfileEditSettings;
