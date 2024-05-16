'use client'
import Link from "next/link";
import style from "./_MobileHeader.module.scss";
import { LiaAngleRightSolid, LiaAngleDownSolid  } from "react-icons/lia";
import { useState } from "react";

const MobileHeader = ({ active, setActive }) => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
  return (
    <>
      <div
        className={`${active ? style.openMenu : style.closeMenu} ${
          style.mobileMenu
        }`}
      >
        <div className={style.mobileNav}>
            <div className={style.logo}>
                <Link href='/'>
                <img
                src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/logo.svg"
                alt=""
              />
                </Link>
            </div>
          <ul className={style.mobileList}>
            <li>
              <Link href="#" className={style.mobileLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className={style.mobileLink}>
                About
              </Link>
            </li>
            <li  onClick={toggle}>
              <Link href="#" className={style.mobileLink}>
                Services {open ? <LiaAngleDownSolid /> : <LiaAngleRightSolid/>}
              </Link>
              <ul className={`${open ? style.mobileDownOpen : style.mobileDownClose}`}>
                <li>
                  <Link className={style.downLink} href="#">
                    All Events
                  </Link>
                </li>
                <li>
                  <Link className={style.downLink} href="#">
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link className={style.downLink} href="#">
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link className={style.downLink} href="#">
                    Social Events
                  </Link>
                </li>
                <li>
                  <Link className={style.downLink} href="#">
                    Parties
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className={style.mobileLink}>
                Menus
              </Link>
            </li>
            <li>
              <Link href="#" className={style.mobileLink}>
                Venues
              </Link>
            </li>
            <li>
              <Link href="#" className={style.mobileLink}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className={style.mobileLink}>
                Callery
              </Link>
            </li>
            <li>
              <Link href="#" className={style.mobileLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${active ? style.visibly : style.visibt} ${style.opacity}`}
      ></div>
    </>
  );
};

export default MobileHeader;