"use client";
import axios from "axios";

const ClientDataFetch = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return <div>{JSON.stringify(data)}</div>;
};

export default ClientDataFetch;
