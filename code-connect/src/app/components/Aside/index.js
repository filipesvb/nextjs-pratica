import Image from "next/image";
import styles from "./aside.module.css"

import logo from "./Logo.svg";

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* <img src="/Logo.svg" alt="Logo da CodeConnect" /> */}
            <Image src={logo} alt="Logo da CodeConnect" />
        </aside>
    )
}