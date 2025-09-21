// API configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

// Other configuration constants
export const AUTH_TOKEN_KEY = 'authToken';

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/admin/signin`,
    logout: `${API_BASE_URL}/auth/logout`,
    me: `${API_BASE_URL}/users/me`,
  },
  users: {
    list: `${API_BASE_URL}/admin/users`,
  },
  roles: {
    list: `${API_BASE_URL}/admin/roles`,
    create: `${API_BASE_URL}/admin/roles`,
    update: (id: string) => `${API_BASE_URL}/admin/roles/${id}`,
    delete: (id: string) => `${API_BASE_URL}/admin/roles/${id}`,
  },
  apiKey: {
    list: `${API_BASE_URL}/admin/apikeys`,
    create: `${API_BASE_URL}/admin/apikeys`,
    delete: (id: string) => `${API_BASE_URL}/admin/apikeys/${id}`,
  },
  // Add other endpoint categories as needed
} as const;
