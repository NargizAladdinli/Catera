import HowItWork from "./HowItWork";
import style from "./_HowItWorks.module.scss";
import { FaWheatAwn } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

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
        <div className={style.call}>
          <h4>Call us now +1800 – 123 456 78 or request a quote without obligation.</h4>
          <a href="#"> REQUEST A QUOTE NOW <FaArrowRight/></a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
