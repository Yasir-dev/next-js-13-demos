const CacheExample = async () => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Berlin",
    //{ next: { revalidate: 5 } }// 5 seconds cache
    //{ cache: "no-store" } //no cache
  );

  const data = await response.json();

  return <h1>{data.datetime}</h1>;
};

export default CacheExample;
