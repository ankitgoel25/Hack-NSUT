require('dotenv').config();

module.exports = {
  symbl: {
    appId: process.env.SYMBL_APP_ID,
    appSecret: process.env.SYMBL_APP_SECRET,
    BasePath: process.env.SYMBL_APP_BASE_PATH || 'https://api.symbl.ai',
  },
  google_config_base64: process.env.GOOGLE_CONFIG_BASE64,
  url: {
    client: 'http://localhost:3000',
  },
  allowedURLs: ['http://localhost:3000', 'https://meetBuddy.vercel.app'],
};
