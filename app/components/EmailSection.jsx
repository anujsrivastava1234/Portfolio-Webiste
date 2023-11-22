"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
const EmailSection = () => {
  const [emailSubmitted,setEmailSubmitted] =useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONData = JSON.stringify(data);
    const endPoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };

    const response = await fetch(endPoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent successfully");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am currently looking for new opportunities , my inbox is always
          open, Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <SocialIcon url="https://github.com/anujsrivastava1234" />
          <SocialIcon url="https://www.linkedin.com/in/anuj-srivastava1234/" />
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              typeof="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="abc@mail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block  w-full p-2.5 "
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              typeof="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="subject"
              id="subject"
              required
              placeholder="Just Say Hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block  w-full p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              typeof="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              type="message"
              id="message"
              required
              placeholder="Let's about something..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block  w-full p-2.5 "
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {
            emailSubmitted &&  (
              <p className="text-green-500 text-sm mt-2">
                Email Submitted successfully!!!
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
