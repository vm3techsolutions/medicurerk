'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Valid email required';
    if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = 'Valid 10-digit phone number required';
    if (!formData.topic.trim()) newErrors.topic = 'Topic is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agree) newErrors.agree = 'You must agree to continue';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.result === 'Success') {
          alert('Message sent and saved to Google Sheet!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            topic: '',
            message: '',
            agree: false,
          });
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <section className="flex flex-col md:flex-row items-start gap-8 py-14 px-6 md:px-16">
      {/* Left Side */}
      <div className="md:w-[30%] w-full sm:py-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#125C3A] mb-2">GET IN TOUCH !</h2>
        <p className="text-xl font-bold text-[#125C3A]">TOGETHER TOWARDS BETTER HEALTH</p>
      </div>

      {/* Right Side (Form) */}
      <form
        onSubmit={handleSubmit}
        className="md:w-[70%] w-full bg-white border border-[#EDE6DB] rounded-xl shadow-md p-6 space-y-4 text-[#191818]"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-[#EDE6DB] rounded px-4 py-2"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 error">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-[#EDE6DB] rounded px-4 py-2"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 error">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone no."
              className="w-full border border-[#EDE6DB] rounded px-4 py-2"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 error">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="text"
              name="topic"
              placeholder="Topic"
              className="w-full border border-[#EDE6DB] rounded px-4 py-2"
              value={formData.topic}
              onChange={handleChange}
            />
            {errors.topic && <p className="text-red-500 error">{errors.topic}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="w-full border border-[#EDE6DB] rounded px-4 py-2"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 error">{errors.message}</p>}
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label className="text-sm">
            I agree to{' '}
            <a href="#" className="text-blue-600">Privacy Policy</a> and{' '}
            <a href="#" className="text-blue-600">Terms and Conditions</a>.
          </label>
        </div>
        {errors.agree && <p className="text-red-500 error">{errors.agree}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#E9C46A] hover:bg-[#125C3A] hover:text-white text-black font-semibold px-6 py-2 rounded-3xl shadow-md transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
}
