module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:46584/api',
    TOKEN_KEY: 'theConsole-auth-token',
  }