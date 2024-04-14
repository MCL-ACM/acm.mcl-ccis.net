import React from 'react';
import OTPInput from 'react-otp-input';
import { Button, Form } from 'semantic-ui-react';

export default function OTPForm({ otpFunc, otpRef, setOtpRef, otpError }) {
  return (
    <div className=''>
      <h1>Enter the OTP from your email</h1>
      <Form onSubmit={otpFunc} className='text-center'>
        <OTPInput
          value={otpRef}
          onChange={setOtpRef}
          numInputs={4}
          renderSeparator={<h1>-</h1>}
          renderInput={(props) => (
            <input
              {...props}
              className='border border-black text-center mx-2 text-4xl m-16'
            />
          )}
        />
        <Button type='submit' className='bg-gray-400 p-4 rounded-xl'>
          Submit
        </Button>
        <h1>{otpError}</h1>
      </Form>
    </div>
  );
}
