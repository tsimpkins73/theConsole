module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://the-console.herokuapp.com/api',
    TOKEN_KEY: 'theConsole-auth-token',
  }