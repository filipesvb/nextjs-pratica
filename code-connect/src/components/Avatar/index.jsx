import Image from "next/image";
import styles from "./avatar.module.css"

export const Avatar = ({ name, imageUrl }) => {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image src={imageUrl} alt={"Foto do " + name} width={32} height={32} />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
