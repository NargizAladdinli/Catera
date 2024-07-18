import style from "./_AllEvents.module.scss";
import Event from "./Event";
import { FaWheatAwn } from "react-icons/fa6";  

const AllEvents = () => {
  return (
    <section className={style.events}>
      <div className="container">
        <div className={style.title}>
          <p>
            <FaWheatAwn className={style.left} /> WHAT WE DO{" "}
            <FaWheatAwn className={style.right} />
          </p>
          <h2>Events We Cater</h2>
        </div>
        <div className={style.titleSecond}>
          <p>
            We provide catering for company events and drink parties.
            Full-service catering with drinks, canapes, luxury appetizers,
            waiting staff, and rental materials. Plenty of vegetarian and vegan
            options!
          </p>
        </div>
        <div className={style.cards}>
          <Event />
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
