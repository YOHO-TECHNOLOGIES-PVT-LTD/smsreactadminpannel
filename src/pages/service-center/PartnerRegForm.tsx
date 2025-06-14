import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import Client from '../../api';

interface ContactInfo {
    phoneNumber: string;
    state: string;
    city: string;
    address1: string;
    address2: string;
}

interface PartnerFormData {
    firstName: string;
    lastName: string;
    companyName?: string;
    email: string;
    password: string;
    contact_info: ContactInfo;
    role: 'partner';
    image?: File | null;
}

const PartnerRegForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<PartnerFormData>({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        password: '',
        contact_info: {
            phoneNumber: '',
            state: '',
            city: '',
            address1: '',
            address2: '',
        },
        role: 'partner',
        image: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === 'image' && files) {
            setFormData((prev) => ({ ...prev, image: files[0] }));
        } else if (name.startsWith('contact_info.')) {
            const key = name.split('.')[1] as keyof ContactInfo;
            setFormData((prevData) => ({
                ...prevData,
                contact_info: {
                    ...prevData.contact_info,
                    [key]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'contact_info') {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    data.append(`contact_info.${subKey}`, String(subValue));
                });
            } else if (key === 'image' && value instanceof File) {
                data.append('image', value);
            } else if (value !== undefined && value !== null) {
                data.append(key, value as string);
            }
        });

        try {
            const response: any = await new Client().admin.servicecenter.postPartner(data);
            console.log(response.data);
            navigate(-1);
        } catch (error: any) {
            alert('Registration failed!');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/70 z-50 py-12">
            <div className="relative w-full max-w-2xl bg-amber-100 p-10 rounded-xl shadow-xl overflow-y-auto max-h-screen">
                {/* Close button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 right-4 text-amber-900 hover:text-red-600 transition"
                    aria-label="Close"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-bold text-center mb-6 text-amber-900">
                    Partner Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                        { name: 'firstName', label: 'First Name', required: true },
                        { name: 'lastName', label: 'Last Name', required: true },
                        { name: 'companyName', label: 'Company Name' },
                        { name: 'email', label: 'Email', type: 'email', required: true },
                        { name: 'contact_info.phoneNumber', label: 'Phone Number', required: true },
                        { name: 'contact_info.state', label: 'State' },
                        { name: 'contact_info.city', label: 'City' },
                        { name: 'contact_info.address1', label: 'Address Line 1' },
                        { name: 'contact_info.address2', label: 'Address Line 2' },
                    ].map(({ name, label, type = 'text', required }) => (
                        <div key={name}>
                            <label className="block text-sm font-medium text-amber-900 mb-1">
                                {label}
                            </label>
                            <input
                                type={type}
                                name={name}
                                required={required}
                                placeholder={label}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-amber-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                            />
                        </div>
                    ))}

                    {/* Password field (plain text) */}
                    <div>
                        <label className="block text-sm font-medium text-amber-900 mb-1">
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            required
                            placeholder="Password"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-amber-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Image Upload Field */}
                    <div>
                        <label className="block text-sm font-medium text-amber-900 mb-1">
                            Upload Profile Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="block w-full text-sm text-amber-800 border border-amber-300 rounded-md cursor-pointer bg-white file:bg-amber-200 file:text-amber-800 file:border-none file:rounded file:px-4 file:py-1 hover:file:bg-amber-300 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-amber-700 text-white font-semibold py-2 rounded-md hover:bg-amber-800 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PartnerRegForm;
