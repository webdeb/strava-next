import strava from "strava-v3";

strava.config({
  access_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "http://localhost:3000/strava-authorized"
});

export default strava;
