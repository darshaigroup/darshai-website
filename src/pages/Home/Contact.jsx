import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        interest: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    /* ================= VALIDATION ================= */
    const validate = () => {
        let newErrors = {};

        // Name validation
        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Email validation
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }

        // Dropdown validation
        if (!form.interest) {
            newErrors.interest = "Please select an option";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ================= HANDLE CHANGE ================= */
    const handleChange = (e) => {
        const { name, value } = e.target;

        // XSS SAFE (basic sanitization)
        const safeValue = value.replace(/</g, "").replace(/>/g, "");

        setForm({ ...form, [name]: safeValue });
    };

    /* ================= SUBMIT ================= */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        // simulate API
        setTimeout(() => {
            setSuccess(true);
            setForm({
                name: "",
                email: "",
                interest: "",
                message: "",
            });
        }, 500);
    };

    return (
        <section id="contact"className="bg-[#F5F1E8] py-20 px-6">
            <div className="max-w-5xl mx-auto bg-[#F1ECE2] p-10 rounded-3xl border border-[#E0D8C5]">

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Row */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Name */}
                        <div>
                            <label className="block text-[#2A4A3A] mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-4 rounded-xl bg-white outline-none"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[#2A4A3A] mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full p-4 rounded-xl bg-white outline-none"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                    </div>

                    {/* Dropdown */}
                    <div>
                        <label className="block text-[#2A4A3A] mb-2">
                            I'm interested in *
                        </label>
                        <select
                            name="interest"
                            value={form.interest}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-white outline-none"
                        >
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        {errors.interest && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.interest}
                            </p>
                        )}
                    </div>

                    {/* Textarea (optional) */}
                    <div>
                        <label className="block text-[#2A4A3A] mb-2">
                            Tell us about your wellness goals
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Share your current health challenges..."
                            className="w-full p-4 rounded-xl bg-white outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-[#2b8542] text-white px-8 py-4 rounded-full shadow-md hover:scale-105 transition"
                    >
                        Submit Application
                    </button>

                    <p className="text-sm text-[#7A8F84] mt-4">
                        By submitting this form, you agree to be contacted by DARSHAI.
                    </p>
                </form>

                {/* ================= SUCCESS POPUP ================= */}
                <AnimatePresence>
                    {success && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
                        >
                            <motion.div
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                exit={{ y: 50 }}
                                className="bg-white p-10 rounded-3xl text-center max-w-md relative overflow-hidden z-10"
                            >

                                {/* FIXED: overlay won't block clicks */}
                                <div className="absolute inset-0 bg-gradient-radial from-[#8FAE97]/40 to-transparent animate-pulse pointer-events-none"></div>

                                <h3 className="text-2xl font-serif text-[#2A4A3A] mb-4">
                                    🌿 Thank You
                                </h3>

                                <p className="text-[#23be78]">
                                    Your journey toward biological sovereignty has begun.
                                </p>

                                <button
                                    onClick={() => setSuccess(false)}
                                    className="mt-6 px-6 py-2 bg-[#2A4A3A] text-white rounded-full relative z-20"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}

export default Contact;