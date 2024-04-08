import { API_ADD_CONTRIBUTIONS } from './api';

export async function setContributionData() {
  try {
    const response = await fetch(API_ADD_CONTRIBUTIONS);
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
