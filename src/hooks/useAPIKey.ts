import { API_ENDPOINTS } from '@/config/api';

export interface APIKey {
  id: string;
  key: string;
  name: string;
  createdAt: string;
}

export const useAPIKey = () => {
  const createAPIKey = async () => {
    // Logic to create an API key

    const res = await fetch(API_ENDPOINTS.apiKey.create, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to create API key');
    }
    return res.json();
  };

  const getApiKeys = async (): Promise<APIKey[]> => {
    const keys = await fetch(API_ENDPOINTS.apiKey.list, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    const data = await keys.json();
    return data.apiKeys;
  };

  const deleteAPIKey = async (id: string) => {
    const res = await fetch(API_ENDPOINTS.apiKey.delete(id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to delete API key');
    }

    return res.json();
  };
  return { createAPIKey, getApiKeys, deleteAPIKey };
};
