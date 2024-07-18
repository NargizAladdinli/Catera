import HowItWork from "./HowItWork";
import style from "./_HowItWorks.module.scss";
import { FaWheatAwn } from "react-icons/fa6";
import Request from "../Request/Request";

const HowItWorks = async ({ howItWorks, lang }) => {
  return (
    <section className={style.howItWorks}>
      <div className="container">
        <div className={style.title}>
          <p>
            <FaWheatAwn className={style.left}/> OUR WORK PROCESS <FaWheatAwn className={style.right}/>
          </p>
          <h2>How It Works</h2>
        </div>
        <div className={style.cards}>
          {howItWorks
            ? howItWorks.map((item, index) => {
                return (
                  <HowItWork
                    key={item.id}
                    lang={lang}
                    items={item}
                    index={index}
                  />
                );
              })
            : "Melumat tapilmadi"}
        </div>
        <Request/>
      </div>
    </section>
  );
};

export default HowItWorks;
