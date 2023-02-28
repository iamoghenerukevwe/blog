import Link from "next/link";
import styles from '@/styles/Nav.module.css'

function Nav() {
  return (
    <nav className={styles.navbar}>

      <Link href="/">airdward</Link>
      <Link href="/">Home</Link>
      <Link href="/">Resume</Link>

    </nav>
  );
}

export default Nav;