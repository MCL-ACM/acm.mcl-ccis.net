import { API_GET_MEMBERS } from './api';

export async function fetchAllMembers() {
  try {
    const response = await fetch(API_GET_MEMBERS, {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}

export function test() {}
