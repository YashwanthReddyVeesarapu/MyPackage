import { google } from "googleapis";

const OAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export const generateAuthUrl = () => {
  const scopes = ["https://www.googleapis.com/auth/gmail.readonly"];
  return OAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
};

export const getTokens = async (code) => {
  const { tokens } = await OAuth2Client.getToken(code);
  OAuth2Client.setCredentials(tokens);
  return tokens;
};
