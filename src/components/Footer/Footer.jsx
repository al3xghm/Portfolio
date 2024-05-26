import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <>
            <footer id="contact" className={styles.footer}>
                <div className={styles.footerLeft}>
                    <h2>Connect with me 👋🏼</h2>
                    <a className="button" href="mailto:alexandre.ghmir@edu.univ-eiffel.com">
                        <button className={styles.button}>Get In Touch</button>
                    </a>
                </div>
                <div className={styles.footerLink}>
                    <h2>Explore</h2>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link href="/#home">Home</Link>
                        </li>
                        <li>
                            <Link href="/#about">About</Link>
                        </li>
                        <li>
                            <Link href="/#projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerSocial}>
                    <h2>Socials</h2>
                    <ul>
                        <li>

                            <Link href="https://www.linkedin.com/in/alexandre-ghmir-8414812a4/" target="_blank">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/al3xghm" target="_blank">
                                <Image src="/github.svg" alt="GitHub" width={30} height={30} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
