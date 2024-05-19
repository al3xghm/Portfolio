import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
      <ul className={styles.navLinks}>
        <li className={styles.brand}>
          <Link href="/">
           . Alexandre Ghmir
          </Link>
        </li>
        <li>
          <Link href="#about">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects">
            Work
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
