import Image from "next/image";
import styles from "./aside.module.css";

import logo from "./Logo.svg";
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* <img src="/Logo.svg" alt="Logo da CodeConnect" /> */}
      <Link href="/">
        <Image src={logo} alt="Logo da CodeConnect" />
      </Link>
    </aside>
  );
};
