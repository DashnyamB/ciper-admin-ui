import { API_ENDPOINTS, AUTH_TOKEN_KEY } from '@/config/api';

export interface Role {
  id: string;
  name: string;
  identifier: string;
  description?: string;
}

export const useRole = () => {
  const getRoles = async (): Promise<Role[]> => {
    const roles = await fetch(API_ENDPOINTS.roles.list, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`,
      },
    });

    const data = await roles.json();
    return data;
  };

  const createRole = async (role: Omit<Role, 'id'>) => {
    const response = await fetch(API_ENDPOINTS.roles.create, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`,
      },
      body: JSON.stringify(role),
    });

    if (!response.ok) {
      throw new Error('Failed to create role');
    }

    return response.json();
  };

  const deleteRole = async (id: string): Promise<void> => {
    await fetch(`${API_ENDPOINTS.roles.delete(id)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`,
      },
    });
  };

  return { getRoles, deleteRole, createRole };
};
