"use client";

import React, { useState } from "react";
import { CustomButton, Hero } from "@/components";

const Contact = () => {
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
  return (
    <div>
      <Hero
        Heading="Contact Us"
        Paragraph="For any additional information or if you're interested in partnering with us, please don't hesitate to get in touch."
      />
      <div className="responsive">
        <div className="">
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput7"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              {name === "" && (
                <label
                  htmlFor="exampleInput7"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-sm transition-all duration-200 ease-out dark:text-neutral-200"
                >
                  Name
                </label>
              )}
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput8"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              {email === "" && (
                <label
                  htmlFor="exampleInput8"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-sm transition-all duration-200 ease-out dark:text-neutral-200"
                >
                  Email address
                </label>
              )}
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea13"
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {message === "" && (
                <label
                  htmlFor="exampleFormControlTextarea13"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-sm transition-all duration-200 ease-out dark:text-neutral-200"
                >
                  Message
                </label>
              )}
            </div>

            <CustomButton
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

export default Contact;
