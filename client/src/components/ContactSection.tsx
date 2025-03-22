import React, { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    consultation: string;
    phone: string;
    message: string;
};

type FormErrors = {
    [key in keyof FormData]?: string;
};

const consultationOptions = [
    'Business Strategy',
    'E-commerce Development',
    'Marketplace Integration',
    'System Optimization',
    'Customer Experience',
];

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        consultation: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.consultation) {
            newErrors.consultation = 'Please select a consultation type';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[0-9\s\-()]+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted successfully:', formData);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                consultation: '',
                phone: '',
                message: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full text-white py-16 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-my-purple2)] opacity-20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-my-purple)] opacity-10 rounded-full blur-3xl -z-10"></div>

            <div className="my-container">
                <div className="rounded-xl bg-[url('/assets/images/bg2.svg')] bg-cover shadow-myshadow1 w-full px-8 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-6">
                            <h3 className="text-[var(--color-my-purple)] uppercase tracking-wider font-medium">
                                CONTACT US
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight font-redHatDisplay">
                                We're Ready To Talk About Your <span className="text-[var(--color-my-purple)]">Opportunities.</span>
                            </h2>
                            <div className="space-y-3 text-gray-300 font-[var(--font-redHatDisplay)]">
                                <p>Develop core online marketplaces focused on customer needs.</p>
                                <p>Nurture online retailers to become industry leaders.</p>
                                <p>Expand cutting-edge platforms for next-generation commerce.</p>
                                <p>Continuously improve system capabilities based on customer feedback.</p>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-[var(--color-bg1)]/50 backdrop-blur-sm p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                Make An <span className="text-[var(--color-my-purple)]">Appointment.</span>
                            </h3>

                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Your Name"
                                        className={`w-full bg-[var(--color-my-black)]/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'
                                            } rounded-lg p-3 focus:outline-none focus:border-[var(--color-my-purple)] transition`}
                                    />
                                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Your Email"
                                        className={`w-full bg-[var(--color-my-black)]/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'
                                            } rounded-lg p-3 focus:outline-none focus:border-[var(--color-my-purple)] transition`}
                                    />
                                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div>
                                    <select
                                        name="consultation"
                                        value={formData.consultation}
                                        onChange={handleChange}
                                        className={`w-full bg-[var(--color-my-black)]/50 border ${errors.consultation ? 'border-red-500' : 'border-gray-700'
                                            } rounded-lg p-3 focus:outline-none focus:border-[var(--color-my-purple)] transition text-white ${!formData.consultation ? 'text-gray-500' : ''
                                            }`}
                                    >
                                        <option value="" className="text-gray-500">Consultation</option>
                                        {consultationOptions.map(option => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.consultation && (
                                        <p className="mt-1 text-red-500 text-sm">{errors.consultation}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className={`w-full bg-[var(--color-my-black)]/50 border ${errors.phone ? 'border-red-500' : 'border-gray-700'
                                            } rounded-lg p-3 focus:outline-none focus:border-[var(--color-my-purple)] transition`}
                                    />
                                    {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write Your Message"
                                        rows={4}
                                        className={`w-full bg-[var(--color-my-black)]/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'
                                            } rounded-lg p-3 focus:outline-none focus:border-[var(--color-my-purple)] transition resize-none`}
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto md:min-w-32 float-right bg-[var(--color-my-purple)] hover:bg-[var(--color-my-purple2)] text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-my-lightpurple)] focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
                                    >
                                        {isSubmitting ? (
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;