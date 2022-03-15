import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import Button from '../common/buttons/Button'

export default function Form() {
  return (
    <div className="my-10 px-5">
        <form method="post" action="#" className="flex flex-col gap-7 font-light text-rich-black">
            <label htmlFor="name">
                Your name<br />
                <input id="name" name="name" type="text" placeholder="Enter your name here" required className="w-full mt-1 py-2 border-b-2 border-cerulean-crayola text-lg focus:outline-none focus:border-standard-blue" />
            </label>
            <label htmlFor="email">
                Your email<br />
                <input id="email" name="email" type="email" placeholder="Enter your email here" required className="w-full mt-1 py-2 border-b-2 border-cerulean-crayola text-lg focus:outline-none focus:border-standard-blue" />
            </label>
            <label htmlFor="message">
                Your message<br />
                <textarea id="message" name="message" rows="5" placeholder="Enter your message here" required className="w-full mt-1 py-2 border-b-2 border-cerulean-crayola text-lg focus:outline-none focus:border-standard-blue" />
            </label>
            {/* reCAPTCHA here */}
            <Button
                text="Send my message"
                color="bg-darkish-blue"
                textColor="text-white"
                icon={<FiArrowRight size="1.3em" />}
            />
        </form>
    </div>
  )
}
