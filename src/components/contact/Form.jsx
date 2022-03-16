import React, { useState } from 'react'
import emailjs from "emailjs-com"
import { Helmet } from 'react-helmet'
import { FiArrowRight } from "react-icons/fi";
import ReCAPTCHA from 'react-google-recaptcha'
import Button from '../common/buttons/Button'
import MessageSentAlert from './MessageSentAlert';

export default function Form() {
    const recaptchaRef = React.createRef()
    const recaptchaSitekey = "6LfJCeYeAAAAADBoJ1boATwFV1G4fa8VEY1yLfv4"

    const [showMessageSent, setShowMessageSent] = useState(false);

    function sendEmail(event) {
        event.preventDefault()
    
        const recaptchaValue = recaptchaRef.current.getValue()
        if(recaptchaValue.length) {
            emailjs.sendForm(
                "contact_form",
                "contact_form_template",
                event.target,
                "ZUX5zi3qOZXgli_o3"
            )

            event.target.reset()
            setShowMessageSent(true)
        }

    }

    return (
        <div className="my-10 px-5">
            <Helmet>
                <script src="https://www.google.com/recaptcha/api.js" async defer />
            </Helmet>
            <form onSubmit={sendEmail} className="flex flex-col gap-7 font-light text-rich-black">
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
                <ReCAPTCHA
                    ref = {recaptchaRef}
                    sitekey = {recaptchaSitekey}
                />
                <Button
                    text="Send my message"
                    color="bg-darkish-blue"
                    textColor="text-white"
                    icon={<FiArrowRight size="1.3em" />}
                    type="submit"
                />
            </form>
            <div className="mt-5" style={{ display: showMessageSent ? "block" : "none" }}>
                <MessageSentAlert />
            </div>
        </div>
    )
}
