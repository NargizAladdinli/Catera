import style from './_Contact.module.scss'
import Formiks from '../Formiks/Formiks'
import ContactItem from '../ContactItem/ContactItem'
import Image from 'next/image'
// import vegetable from '../../../public/images/vegetable.png'

const Contact = () => {
    return(
        <section className={style.contact}>
            <div className="container">
                <div className={style.cards}>
                    <div className={style.card}>
                        <Formiks/>
                    </div>
                    <div className={style.card}>
                        <ContactItem/>
                    </div>
                </div>
            </div>
            <div className={style.imagePos}>
               <div className={style.image}>
               {/* <Image src={vegetable} width={100} height={100}/> */}
               <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/img-contact-vegetable-min.png" alt="" />
               </div>
            </div>
        </section>
    )
}

export default Contact