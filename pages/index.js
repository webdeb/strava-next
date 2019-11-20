import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <button
      onClick={() =>
        fetch("/api/strava-access-url")
          .then(payload => payload.json())
          .then(json => (location = json.accessUrl))
      }
    >
      Get accessUrl from API
    </button>
  </div>
);

export default Home;
