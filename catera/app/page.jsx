import AllEvents from "./components/AllEvents/AllEvents";
import Request from "./components/Request/Request";
import Sliders from "./components/Slider/Slider";
import StartHere from "./components/StartHere/StartHere";

export default function Home() {
  return (
    <main>
      <StartHere/>
      <Sliders/>
      <AllEvents />
      <Request />
    </main>
  );
}
