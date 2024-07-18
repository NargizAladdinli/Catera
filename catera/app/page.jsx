import Image from "next/image";
import AllEvents from "./components/AllEvents/AllEvents";
import Request from "./components/Request/Request";

export default function Home() {
  return (
    <main>
      <AllEvents />
      <Request />
    </main>
  );
}
