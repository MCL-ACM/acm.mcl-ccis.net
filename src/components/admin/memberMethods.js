import { API_GET_MEMBERS } from './api';

export async function getMembersData() {
  try {
    const response = await fetch(API_GET_MEMBERS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}

export async function test() {
  return '';
}
