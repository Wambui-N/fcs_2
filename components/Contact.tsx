import React from "react";
import { CustomButton, Hero } from "@/components";

const Contact = () => {
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
              />
              <label
                htmlFor="exampleInput7"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-fcs_black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-fcs_orange peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-fcs_orange"
              >
                Name
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput8"
                placeholder="Email address"
              />
              <label
                htmlFor="exampleInput8"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-fcs_black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-fcs_orange peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-fcs_orange"
              >
                Email address
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea13"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="exampleFormControlTextarea13"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-fcs_black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-fcs_orange peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-fcs_orange"
              >
                Message
              </label>
            </div>

            <CustomButton 
              title="Submit"
              buttonStyle="w-full text-sm bg-fcs_orange text-fcs_white hover:bg-fcs_white hover:text-fcs_orange rounded-full"
              size="sm"
              href="#"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
