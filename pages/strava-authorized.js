import fetch from "isomorphic-unfetch";

const StravaAuthorized = ({ params }) => {
  return <div>{JSON.stringify(params, null, 2)}</div>;
};

StravaAuthorized.getInitialProps = ({ req, query }) => {
  console.log(req, "REQUEST");

  return Promise.resolve({ params: query });
};

export default StravaAuthorized;
