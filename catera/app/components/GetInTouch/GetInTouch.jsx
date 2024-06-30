import style from './_GetInTouch.module.scss'
import image from '../../../public/images/aboutbg.jpg'
import Link from 'next/link'

const GetInTouch = () => {
    return(
        <section className={style.bgImage} style={{backgroundImage: `url('${image.src}')`}}>
            <div className="container">
                <div className={style.title}>
                    <p>Your next catered event!</p>
                    <h2>
                        <Link href='/contacts'>Get In Touch</Link>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch