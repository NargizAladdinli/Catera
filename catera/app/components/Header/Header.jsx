'use client'
import Link from "next/link";
import style from "./_Header.module.scss";
import { PiStarFourFill } from "react-icons/pi";
import { GiRotaryPhone } from "react-icons/gi";
import { VscTriangleDown } from "react-icons/vsc";
import MobileHeader from "./mobile/MobileHeader";
import { useState } from "react";

const Header = () => {

  const [active, setActive] = useState(false)

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.flex}>
          <div className={style.flexMenu}>
            <div className={style.logo}>
              <Link href='/'>
              <img
                src="https://demo2.pavothemes.com/catera/wp-content/uploads/2023/10/logo.svg"
                alt=""
              />
              </Link>
            </div>
            <div className={style.menu}>
              <nav className={style.menuNav}>
                <ul className={style.menuList}>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="/">
                      home <PiStarFourFill />
                    </Link>
                  </li>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="#">
                      about <PiStarFourFill />
                    </Link>
                  </li>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="#">
                      services <PiStarFourFill />
                    </Link>
                    <ul className={style.dropdown}>
                      <li>
                        <Link className={style.dropLink} href="#">
                          All Events
                        </Link>
                      </li>
                      <li>
                        <Link className={style.dropLink} href="#">
                          Corporate
                        </Link>
                      </li>
                      <li>
                        <Link className={style.dropLink} href="#">
                          Weddings
                        </Link>
                      </li>
                      <li>
                        <Link className={style.dropLink} href="#">
                          Social Events
                        </Link>
                      </li>
                      <li>
                        <Link className={style.dropLink} href="#">
                          Parties
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="#">
                      menus <PiStarFourFill />
                    </Link>
                  </li>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="#">
                      venues <PiStarFourFill />
                    </Link>
                  </li>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="#">
                      blog <PiStarFourFill />
                    </Link>
                  </li>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="#">
                      callery <PiStarFourFill />
                    </Link>
                  </li>
                  <li className={style.menuItem}>
                    <Link className={style.menuTitle} href="/contacts">
                      contact <PiStarFourFill />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={style.language}>
            <Link href='#' className={style.langLink}>AZ <VscTriangleDown/> </Link>
            <ul className={style.langDrop}>
                <li>
                    <Link href='#' className={style.dropLang}>Rus</Link>
                </li>
                <li>
                    <Link href='#' className={style.dropLang}>Eng</Link>
                </li>
            </ul>
          </div>
          <div className={style.contact}>
            <div className={style.contactItem}>
              <Link className={style.contactList} href="/contacts">
                <div className={style.icon}>
                  <span>
                    <GiRotaryPhone /> 055-555-55-55
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className={style.burger} onClick={() => setActive(!active)}>
                <button className={style.click}>
                    <span className={style.lineOne}></span>
                    <span className={style.lineTwo}></span>
                    <span className={style.lineThree}></span>
                </button>
            </div>
          <MobileHeader active={active} setActive={setActive}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
