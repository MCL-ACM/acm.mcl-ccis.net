import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../common/buttons/Button';
import MessageSentAlert from './MessageSentAlert';

export default function Form() {
  const recaptchaRef = React.createRef();
  const recaptchaSitekey = `${process.env.GATSBY_CAPTCHA_SITE_KEY}`;

  const [showRecaptchaAlert, setShowRecaptchaAlert] = useState(false);
  const [showMessageSent, setShowMessageSent] = useState(false);

  function sendEmail(event) {
    event.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue.length) {
      emailjs.sendForm(
        'contact_form',
        'contact_form_template',
        event.target,
        `${process.env.GATSBY_EMAILJS_USER_ID}`,
      );

      setShowRecaptchaAlert(false);
      event.target.reset();
      setShowMessageSent(true);
    } else {
      setShowRecaptchaAlert(true);
    }
  }

  return (
    <div className='md:w-[670px] md:mx-auto my-10 lg:my-0 px-5 md:py-14 md:px-12 md:bg-white md:rounded-2xl md:border-2 md:drop-shadow-2xl'>
      <Helmet>
        <script src='https://www.google.com/recaptcha/api.js' async defer />
      </Helmet>
      <form
        onSubmit={sendEmail}
        className='flex flex-col font-light gap-7 text-rich-black'
      >
        <label htmlFor='name'>
          Your name
          <br />
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name here'
            required
            className='w-full py-2 mt-1 text-lg border-b-2 border-cerulean-crayola focus:outline-none focus:border-standard-blue'
          />
        </label>
        <label htmlFor='email'>
          Your email
          <br />
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email here'
            required
            className='w-full py-2 mt-1 text-lg border-b-2 border-cerulean-crayola focus:outline-none focus:border-standard-blue'
          />
        </label>
        <label htmlFor='message'>
          Your message
          <br />
          <textarea
            id='message'
            name='message'
            rows='5'
            placeholder='Enter your message here'
            required
            className='w-full py-2 mt-1 text-lg border-b-2 border-cerulean-crayola focus:outline-none focus:border-standard-blue'
          />
        </label>

        <div className='flex flex-col items-center gap-y-10'>
          <div>
            <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSitekey} />
            <p
              className='text-red-500'
              style={{ display: showRecaptchaAlert ? 'block' : 'none' }}
            >
              Please answer reCAPTCHA
            </p>
          </div>

          <div>
            <Button
              text='Send my message'
              color='bg-darkish-blue'
              textColor='text-white'
              type='submit'
            />
          </div>
        </div>
      </form>
      <p className='mt-4 text-xs font-light text-center text-gray-700'>
        The information that you submit in this form will be sent to our email
        and will not be stored in a database
      </p>
      <div
        className='mt-5'
        style={{ display: showMessageSent ? 'block' : 'none' }}
      >
        <MessageSentAlert />
      </div>
    </div>
  );
}
