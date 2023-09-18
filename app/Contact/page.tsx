import Image from 'next/image'
"use client";

import { Form, Hero } from '@/components'

export default function ContactPage() {
  return (
    <div className=''>
       <Hero
        Heading="Contact Us"
        Paragraph="For any additional information or if you're interested in partnering with us, please don't hesitate to get in touch."
      />
      <Form />
    </div>
  );
}
