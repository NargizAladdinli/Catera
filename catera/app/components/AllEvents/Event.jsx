import Link from "next/link";
import style from "./_AllEvents.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const Event = () => {
  return (
    <>
      <div className={style.card}>
        <div className={style.card_item} style={{backgroundImage: `url('https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-corporate-1.jpg')`}}>
        <div className={style.context}>
            <h2>Corporate</h2>
        </div>
        <div className={style.image}>
            <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-corporate-1-460x580.jpg" alt="" />
        </div>
        <div className={style.link}>
            <Link href='#'>LEARN MORE <FaArrowRightLong/></Link>
        </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.card_item} style={{backgroundImage: `url('https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-wedding-2.jpg')`}}>
        <div className={style.context}>
            <h2>Corporate</h2>
        </div>
        <div className={style.image}>
            <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-wedding-2-460x580.jpg" alt="" />
        </div>
        <div className={style.link}>
            <Link href='#'>LEARN MORE <FaArrowRightLong/></Link>
        </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.card_item} style={{backgroundImage: `url('https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-social-1.jpg')`}}>
        <div className={style.context}>
            <h2>Corporate</h2>
        </div>
        <div className={style.image}>
            <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-social-1-460x580.jpg" alt="" />
        </div>
        <div className={style.link}>
            <Link href='#'>LEARN MORE <FaArrowRightLong/></Link>
        </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.card_item} style={{backgroundImage: `url('https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-parties-2.jpg')`}}>
        <div className={style.context}>
            <h2>Corporate</h2>
        </div>
        <div className={style.image}>
            <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/service-parties-2-460x580.jpg" alt="" />
        </div>
        <div className={style.link}>
            <Link href='#'>LEARN MORE <FaArrowRightLong/></Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Event;
