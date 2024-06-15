import style from "./_HowItWorks.module.scss";

const HowItWork = ({ items, index }) => {
  const { title, content } = items;
  return (
    <div className={style.card}>
      <div className={style.cardItems}>
        <div className={style.flexbl}>
         <div>
         <div className={style.number}>
            <span>{`0${index + 1}`}</span>
          </div>
         </div>
          <div className={style.elementor}>
            <div className={style.elementorTitle}>
              <h3>{title}</h3> 
            </div>
            <div className={style.elementorContent}>
                <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
