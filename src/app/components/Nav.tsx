"use client"
import React, { useState } from 'react'
import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link'
import {CgCloseR, CgMenu} from "react-icons/cg";
const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
        console.log("value " + openMenu)
    return (
        <nav className={styles.navbar}>
            <div className={""}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link href="/" className={styles.navbarLink}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/about" className={styles.navbarLink}>
                            About
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/contact" className={styles.navbarLink}>
                            Contact
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/movie" className={styles.navbarLink}>
                            Movie
                        </Link>
                    </li>
                </ul>
                <div className={styles['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={styles['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
            </div>

        </nav>
    )
}

export default Nav