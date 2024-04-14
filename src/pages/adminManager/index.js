import React, { useEffect, useRef, useState } from 'react';
import Head from '../../components/common/Head';
import LoginForm from '../../components/admin/LoginForm';
import OTPForm from '../../components/admin/OTPForm';

import { handleLogin } from '../../components/admin/loginMethods';
import { handleOtp } from '../../components/admin/otpMethods';
import authenticateSession from '../../components/admin/authenticate';

export default function AdminIndexPage() {
  const emailRef = useRef(null);

  const [sessionCheck, setSessionCheck] = useState(false);

  const [emailError, setEmailError] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [otp, setOtp] = useState(null);
  const [otpError, setOtpError] = useState(null);

  const [sessionData, setSessionData] = useState(null);

  useEffect(async () => {
    const cookie = document.cookie.split('=')[1];

    const authResponse = await authenticateSession(cookie);

    if (authResponse.status === 'Success') {
      console.log('Hello');
      setLoggedIn(true);
      setAuthenticated(true);
    }

    setSessionCheck(true);
  }, []);

  let componentToRender;
  if (!isLoggedIn) {
    componentToRender = (
      <LoginForm
        submitFunc={(event) =>
          handleLogin(
            event,
            emailRef,
            setLoggedIn,
            setEmailError,
            setSessionData,
          )
        }
        emailRef={emailRef}
        emailError={emailError}
      />
    );
  } else if (!isAuthenticated) {
    componentToRender = (
      <OTPForm
        otpFunc={(event) =>
          handleOtp(event, otp, sessionData, setAuthenticated, setOtpError)
        }
        otpRef={otp}
        setOtpRef={setOtp}
        otpError={otpError}
      />
    );
  } else {
    componentToRender = <div>Welcome!</div>;
  }

  return (
    <div className='flex flex-col gap-12 mb-20 lg:gap-20 items-center'>
      <Head title='Admin Login' />
      <h1>Hello World</h1>
      {sessionCheck ? componentToRender : <div>Loading...</div>}
    </div>
  );
}
