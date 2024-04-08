import { API_ADD_CONTRIBUTIONS } from './api';

export async function addContributionData(memberID, contributionDT) {
  try {
    const response = await fetch(API_ADD_CONTRIBUTIONS, {
      method: 'POST',
      body: JSON.stringify({
        memberID,
        contributionDT,
      }),
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}

export async function test() {
  return '';
}
