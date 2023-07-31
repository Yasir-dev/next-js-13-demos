import axios from "axios";

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const ServerDataFetch = async () => {
  await wait(4000);

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return <div>{JSON.stringify(data)}</div>;
};

export default ServerDataFetch;
