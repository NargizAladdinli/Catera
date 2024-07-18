import style from './_Request.module.scss'
import { FaArrowRight } from "react-icons/fa";

const Request = () => {
    return(
        <div className={style.call}>
          <h4>Call us now +1800 – 123 456 78 or request a quote without obligation.</h4>
          <a href="#"> REQUEST A QUOTE NOW <FaArrowRight/></a>
        </div>
    )
}

export default Request