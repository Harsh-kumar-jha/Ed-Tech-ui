// Environment variables - simple approach for now
export const env = {
  APP_NAME: 'EdTech UI',
  APP_VERSION: '1.0.0', 
  APP_DESCRIPTION: 'Educational Technology Platform',
  API_BASE_URL: 'http://localhost:3000/api/v1',
  API_TIMEOUT: 10000,
  ENABLE_DEV_TOOLS: true,
  ENABLE_MSW: false,
  ENABLE_ANALYTICS: false,
  ENABLE_ERROR_REPORTING: false,
  DEBUG_MODE: true,
  LOG_LEVEL: 'info',
  isDevelopment: true,
  isProduction: false,
} as const; 