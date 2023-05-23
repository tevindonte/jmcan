import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u45jhcd', 'template_uxhn2be', form.current, 'jotr409kT_CXo9Cnf')
    .then((result) => {
        console.log(result.text);
        console.log('Message sent successfully!');
      })
      .catch((error) => {
        console.error(error.text);
        console.log('Failed to send message.');
      });

    // Clear the form fields after submission
    e.target.reset();
  };

  return (
    <div className="bg-white text-black p-8">
      <div className="flex items-center">
        <h1 className="text-8xl font-Strangebold mr-4">Let's work<br />together!</h1>
      </div>
      <p className="text-md mt-4 py-5 font-Strange">
        I'm eager to contribute my skills and dedication to your team.<br />Let's work together to achieve your company's goals while providing me with valuable learning opportunities.
      </p>
      <form className="mt-8" ref={form} onSubmit={sendEmail}>
        <div className="mb-4 border-b border-gray-500">
          <label htmlFor="name" className="block mb-2 font-Strange">Name</label>
          <input type="text" id="name" className="w-full p-2 font-Strange border-b border-white focus:outline-none" placeholder="Your Name" />
        </div>
        <div className="mb-4 border-b border-gray-500">
          <label htmlFor="email" className="block mb-2 font-Strange">Email</label>
          <input type="email" id="email" className="w-full p-2 font-Strange border-b border-white focus:outline-none focus:border-white" placeholder="example@gmail.com" />
        </div>
        <div className="mb-4 border-b border-gray-500">
          <label htmlFor="message" className="block mb-2 font-Strange">Write Your Message</label>
          <textarea id="message" className="w-full font-Strange p-2 border border-white focus:outline-none focus:border-white" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium font-Strange text-black focus:outline-none bg-white rounded-full hover:text-[#FF001F] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
      </form>
      <div className="flex mt-8 font-Strange">
        <div className="w-1/4">
          <p className="font-bold">Portfolio</p>
          <a href="https://github.com/tevindonte" className="block hover:underline">Github</a>
          <a href="https://medium.com/@tparboosingh84" className="block hover:underline">Medium</a>
        </div>
        <div className="w-1/4">
          <p className="font-bold">Social</p>
          <a href="https://www.linkedin.com/in/tevindonte/" className="block hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/jmcanboy/" className="block hover:underline">Instagram</a>
        </div>
        <div className="w-1/4">
          <p className="font-bold">Email</p>
          <a href="mailto:tparboosingh84@gmail.com" className="block hover:underline">tparboosingh84@gmail.com</a>
        </div>
        <div className="w-1/4">
          <p className="font-bold">Location</p>
          <a href="https://maps.google.com?q=New+Rochelle%2C+New+York" className="block hover:underline">New Rochelle, New York</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
