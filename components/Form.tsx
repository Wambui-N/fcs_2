"use client"

import React, { useState } from "react";
import { CustomButton } from "@/components";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Functions to handle input changes
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  // setCustomValidity
  const handleNameValidation = (event: any) => {
    if (name === "") {
      event.target.setCustomValidity("Name is required");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleEmailValidation = (event: any) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      event.target.setCustomValidity("Email is required");
    } else if (inputValue.indexOf("@") === -1) {
      event.target.setCustomValidity("Please enter a valid email address");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleMessageValidation = (event: any) => {
    if (message === "") {
      event.target.setCustomValidity("Message is required");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Prepare the form data as an object
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Send a POST request to your backend API
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submitted successfully, you can redirect or show a success message here
        console.log("Form submitted successfully");
      } else {
        // Handle errors if the server responds with an error status
        console.error("Form submission failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="responsive">
        <div className=" h-[70vh]">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput7"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                required
                onBlur={handleNameValidation}
              />
              {name === "" && (
                <label
                  htmlFor="exampleInput7"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-base transition-all duration-200 ease-out dark:text-neutral-200"
                >
                  Name
                </label>
              )}
            </div>

            <div className="relative mb-6">
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput8"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                required
                onBlur={handleEmailValidation}
              />
              {email === "" && (
                <label
                  htmlFor="exampleInput8"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-base transition-all duration-200 ease-out"
                >
                  Email address
                </label>
              )}
            </div>

            <div className="relative mb-6">
              <textarea
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea13"
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
                required
                onBlur={handleMessageValidation}
              ></textarea>
              {message === "" && (
                <label
                  htmlFor="exampleFormControlTextarea13"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-base transition-all duration-200 ease-out dark:text-neutral-200"
                >
                  Message
                </label>
              )}
            </div>

            <CustomButton
              type="submit" // Set the button type to "submit" to trigger form submission
              title="Submit"
              buttonStyle="w-full text-base bg-fcs_orange text-fcs_white hover:bg-fcs_white hover:text-fcs_orange rounded-full"
              size="md"
              href="#"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
