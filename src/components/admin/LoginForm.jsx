import React from 'react';
import { Button, Form, FormField, Label } from 'semantic-ui-react';

export default function LoginForm({ submitFunc, emailRef, emailError }) {
  return (
    <Form onSubmit={submitFunc}>
      <FormField>
        <Label>Email Address</Label>
        <input
          name='email'
          type='text'
          placeholder='Enter Email Address...'
          className='border border-black'
          ref={emailRef}
        />
      </FormField>
      <Button type='submit' className='bg-gray-400 p-4 rounded-xl mt-10'>
        Submit
      </Button>
      <h1>{emailError}</h1>
    </Form>
  );
}
