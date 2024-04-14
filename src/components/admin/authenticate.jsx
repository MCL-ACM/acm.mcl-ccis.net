import { API_AUTHENTICATE_SESSION } from './api';

export default async function authenticateSession(sessionData) {
  try {
    const response = await fetch(API_AUTHENTICATE_SESSION, {
      method: 'POST',
      body: JSON.stringify({ sessionData }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}
