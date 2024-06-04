import Link from "next/link";
import style from "./_ContactItem.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const ContactItem = () => {
  return (
    <div className={style.info}>
      <h3>Contact</h3>
      <div className={style.infoTitel}>
        <Link href="#">
          <div className={style.infoFlex}>
            <div className={style.icon}>
              <BiSolidPhoneCall />
            </div>
            <div className={style.text}>
              <h5>Phone</h5>
              <p>055-555-55-55</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className={style.infoFlex}>
            <div className={style.icon}>
              <MdEmail />
            </div>
            <div className={style.text}>
              <h5>EMAIL</h5>
              <p>contact@example.com</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactItem;
