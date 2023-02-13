import styles from './Photo.module.css'

export default function PhotoCard({ src,alt, width = '80%',height = "400px" }){
    return(
        <div className={styles.container} style={{width,height}}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={src} alt={alt} />
            </div>
        </div>
    )
}