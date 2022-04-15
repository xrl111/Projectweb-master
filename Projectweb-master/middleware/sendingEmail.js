const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "863366723110-8t9b4msd3a4472vk7b2d5emq8piehf4n.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04yeOyZkSrS8_CgYIARAAGAQSNwF-L9Ir5cjqm4EphoyaA8Q1w162iR3MzuXcfZBR_OvlqtnPp_SExy663dWD2dFLOWA6N77B3sc";
const oAuth2client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(email) {
  try {
    const accessToken = await oAuth2client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "buiduclan000@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOption = {
      from: "GREENWICH SYSTEM 🎡 <buiduclan000@gmail.com>",
      to: `${email}`,
      subject: "Hello from Gmail using API: You have receive a new submission",
      text: "You have receive a new submission",
      html: "<h3>You have receive a new submission from a student</h3>",
    };

    const result = await transport.sendMail(mailOption);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = sendMail;
