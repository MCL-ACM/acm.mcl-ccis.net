import { API_LOGIN } from './api';

export async function authenticateLogin(email) {
  try {
    const response = await fetch(API_LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}

export async function handleLogin(
  event,
  emailRef,
  setLoggedIn,
  setEmailError,
  setSession,
) {
  event.preventDefault();
  const email = emailRef.current.value;
  // Call your backend API or function here
  if (email) {
    console.log('Email:', email);
    const response = await authenticateLogin(email);

    if (response.status === 'Failed') {
      setEmailError('Email not found!');
    } else {
      setLoggedIn(true);
      setSession(response.sessionData);
    }
  } else {
    setEmailError('Email is empty!');
  }
}
