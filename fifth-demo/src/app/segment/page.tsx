import axios from "axios";

export const revalidate = 3;

const SegmentCacheExample = async () => {
  const { data } = await axios.get(
    "http://worldtimeapi.org/api/timezone/Europe/Berlin"
  );

  return <h1>{data.datetime}</h1>;

  //return <h1>{new Date().getSeconds()}</h1>;
};

export default SegmentCacheExample;
