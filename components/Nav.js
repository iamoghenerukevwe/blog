import Link from "next/link";
import styles from '@/styles/Nav.module.css'

function Nav() {
  return (
    <nav className={styles.navbar}>

      <Link href="/">airdward</Link>
      <div className={styles.buttton}>
      <Link href="/" >Home</Link>
      </div>
      
      <Link href="/">Resume</Link>

    </nav>
  );
}

export default Nav;