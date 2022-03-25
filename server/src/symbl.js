const express = require('express');
const twilio = require('twilio');
const config = require('./config');

const router = express.Router();

app.get('/token', async (req, res) => {
  try {
    const response = await fetch(`${config.symbl.BasePath}/oauth2/token:generate`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        type: 'application',
        appId: config.symbl.appId,
        appSecret: config.symbl.appSecret
      })
    });
    res.json(await response.json()).end();
  } catch (e) {
    console.error('Error while issuing Symbl Token.', e);
    res.status(401)
        .json({
          message: e.toString()
        }).end()
  }
});

module.exports = router;
