// 'use client';

// import { useState } from 'react';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Message sent successfully!');
//         setFormData({ name: '', email: '', phone: '', address: '', message: '' }); // Reset form
//       } else {
//         alert('Failed to send message.');
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('An error occurred. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-6">Get in Touch with Us</h2>
//         <p className="text-lg text-center mb-12">We're here to assist you with any questions or inquiries. Reach out to us today!</p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-600 mb-2" htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-600 mb-2" htmlFor="phone">Phone Number</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-600 mb-2" htmlFor="address">Contact Address</label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-600 mb-2" htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   rows="5"
//                   required
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="text-white">
//             {/* You can add additional contact information like phone number, email, etc. */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wordLimitExceeded, setWordLimitExceeded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the message field is being updated, check the word limit
    if (name === 'message') {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 150) {
        setWordLimitExceeded(true);
        return; // Don't allow more than 150 words
      } else {
        setWordLimitExceeded(false);
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', address: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch with Us</h2>
        <p className="text-lg text-center mb-12">We're here to assist you with any questions or inquiries. Reach out to us today!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="address">Contact Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    wordLimitExceeded ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500'
                  }`}
                  rows="5"
                  required
                ></textarea>
                {wordLimitExceeded && (
                  <p className="text-red-500 text-sm mt-2">You cannot enter more than 150 words.</p>
                )}
              </div>
              <button 
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                disabled={isSubmitting || wordLimitExceeded}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="text-white">
            {/* You can add additional contact information like phone number, email, etc. */}
          </div>
        </div>
      </div>
    </section>
  );
}
