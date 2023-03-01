import styles from '@/styles/header.module.css'

export default function Header() {
  return (
    <section className={styles.header}>

     <div className={styles.primary}>The difference between a flower and a weed is perspective.</div>
     <div className={styles.subtext}>Here I share my perspective and assistance on tech topics, green energy, technical writing and everything in between.</div>

    </section>
  )
}

