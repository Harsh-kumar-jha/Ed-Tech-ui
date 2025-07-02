// Environment variables with fallbacks
const getEnvVar = (key: string, fallback: string): string => {
  if (typeof window !== 'undefined') {
    return fallback; // Client-side fallback
  }
  return process.env[key] || fallback;
};

export const APP_CONFIG = {
  NAME: getEnvVar('VITE_APP_NAME', 'EdTech UI'),
  VERSION: getEnvVar('VITE_APP_VERSION', '1.0.0'),
  DESCRIPTION: getEnvVar('VITE_APP_DESCRIPTION', 'Educational Technology Platform'),
  API_BASE_URL: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api/v1'),
  API_TIMEOUT: parseInt(getEnvVar('VITE_API_TIMEOUT', '10000')),
} as const;

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  COURSES: '/courses',
  SETTINGS: '/settings',
} as const;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent',
} as const; 