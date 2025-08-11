import styles from "./styles.module.css"
import { TimerIcon } from "lucide-react";

export const Menu = () => (
    <nav className={styles.menu}>
        <a href="" className={styles.menuLink}>
            <TimerIcon/>
        </a>
         <a href="" className={styles.menuLink}>
            <TimerIcon/>
        </a>
         <a href="" className={styles.menuLink}>
            <TimerIcon/>
        </a>
         <a href="" className={styles.menuLink}>
            <TimerIcon/>
        </a>
    </nav>
)