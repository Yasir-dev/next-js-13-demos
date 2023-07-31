import { Suspense } from "react";
import Post from "./components/Post";
import Weather from "./components/Weather";

export default function Home() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Post />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
