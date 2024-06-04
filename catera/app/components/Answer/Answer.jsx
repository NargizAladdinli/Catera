import style from './_Answer.module.scss'

const Answer = () => {
    return(
        <section className={style.answerQuestion}>
            <div className="container">
                <div className={style.cards}>
                    <div className={`${style.card} ${style.first}`}>
                        <div className={style.cardItem}>
                            <h3>Get an answer to your catering question</h3>
                            <p>We’d love to hear from you. Please tell us about the event you would like us to create and we’ll connect with you to get started.</p>
                        </div>
                    </div>
                    <div className={`${style.card} ${style.second}`}>
                        <div className={style.cartImg}>
                            <img src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/img-contact-people-min.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Answer;