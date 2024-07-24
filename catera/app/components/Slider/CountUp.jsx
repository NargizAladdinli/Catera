"use client";
import style from "./_Slider.module.scss";
import CountUp from "react-countup";
// import bg from '@/public/images/bg03.png'

const CountUps = () => {
  return (
    <div className={style.numbers}>
      <div className={style.postion}>
        <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/h1-cter01.png" alt="" />
      </div>
      <div className={style.number}>
        <div className={style.items}>
          <CountUp start={0} end={5} delay={0}>
            {({ countUpRef }) => (
              <div className={style.countup}>
                <span ref={countUpRef} />+
              </div>
            )}
          </CountUp>
          <p className={style.first}>years experience</p>
          <p className={style.second}>among divine’s excutive team</p>
        </div>
      </div>
      <div className={style.number}>
        <div className={style.items}>
          <CountUp start={0} end={50} delay={0}>
            {({ countUpRef }) => (
              <div className={style.countup}>
                <span ref={countUpRef} />+
              </div>
            )}
          </CountUp>
          <p className={style.first}>years experience</p>
          <p className={style.second}>among divine’s excutive team</p>
        </div>
      </div>
    </div>
  );
};

export default CountUps;
