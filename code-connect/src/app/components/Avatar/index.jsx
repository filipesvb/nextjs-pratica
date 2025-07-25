import Image from "next/image";

export const Avatar = ({ name, imageUrl }) => {
  return (
    <ul>
      <li>
        <Image src={imageUrl} alt={"Foto do " + name} width={32} height={32} />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
