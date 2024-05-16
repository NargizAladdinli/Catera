import style from './_BgTitel.module.scss'
import bg from '../../../public/images/bgImage.jpg'

const BgTitel = ({children}) => {
    return(
        <section className={style.bgImage} style={{backgroundImage: `url('${bg.src}')`}}>
            <div className="container">
                <h2 className={style.titleText}>{children}</h2>
            </div>
        </section>
    )
}

export default BgTitel;