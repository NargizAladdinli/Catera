import style from './_Slider.module.scss';
import CountUps from './CountUp';
import bg from '@/public/images/bg03.png'

const Sliders = () => {
    return(
        <section className={style.sliders}>
            <div className={style.bla}>
                <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/h1-cter02.png" alt="" />
            </div>
            <div className={style.cards}>
                <div className={`${style.card} ${style.iters}`} style={{backgroundImage: `url('${bg.src}')`}}>
                    <CountUps/>
                </div>
                <div className={`${style.card} ${style.animation}`}>
                </div>
            </div>
        </section>
    )
}

export default Sliders