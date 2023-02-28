import Link  from "next/link";
import styles from "../src/styles/BlogCard.module.css"

export default function BlogPost({title, author, datePublished, coverPhoto, slug}){
    return(
        <div className={styles.card}>
            <Link href={"/posts/" + slug}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.details}>
                    <div classname={styles.author}>
                        
                        <h3>{datePublished}</h3>
                    </div>
                </div>
            </div>
            </Link>
            
        </div>
    )
}