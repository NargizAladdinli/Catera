import style from "./_StartHere.module.scss";
import photo from "../../../public/images/slidermin.jpg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const StartHere = () => {
  return (
    <section className={style.start}>
        <div className={style.bgImage} style={{backgroundImage: `url('${photo.src}')`}}>
            <div className={style.content}>
                <div className={style.animation}>
                    <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/img-slider1-2-min-1.png" alt="" />
                </div>
                <div className={style.text}>
                    <h1>The Best Events Start Here</h1>
                    <p>Quality Ingredients. Top Talent. Genuine Hospitality.</p>
                </div>
                <div className={style.links}>
                    <Link href="/contact">get a quote <FaArrowRightLong/></Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default StartHere;
