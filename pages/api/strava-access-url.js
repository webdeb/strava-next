import strava from "../../strava";

export default (req, res) => {
  const accessUrl = strava.oauth.getRequestAccessURL({
    scope: "activity:read"
  });

  res.json({ accessUrl });
};
