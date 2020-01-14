module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_BASE_URL: 'https://the-console.herokuapp.com/api',
    DB_URL: process.env.DB_URL || "postgres://fyxberjbsmgram:3b5dd74bbacb752ce6970bdcc42b81e4e0594683dcdc4d8e22731a9a8e1760e4@ec2-174-129-254-217.compute-1.amazonaws.com:5432/de7a6qnferjba2",
    TOKEN_KEY: 'theConsole-auth-token',
  }