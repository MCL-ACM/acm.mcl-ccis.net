import { API_OTP_AUTHENTICATE } from './api';

export async function authenticateOtpSession(otpInput, sessionData) {
  try {
    const response = await fetch(API_OTP_AUTHENTICATE, {
      method: 'POST',
      body: JSON.stringify({ otpInput, sessionData }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}

export async function handleOtp(
  event,
  otp,
  sessionData,
  setAuthenticated,
  setOtpError,
) {
  if (otp) {
    const response = await authenticateOtpSession(otp, sessionData);

    if (response.status === 'Success') {
      setAuthenticated(true);

      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
      document.cookie = `sessionID=${
        response.adminSession
      }; expires=${oneWeekFromNow.toUTCString()}; path=/`;
    } else {
      setOtpError(response.message);
    }
  }
}
