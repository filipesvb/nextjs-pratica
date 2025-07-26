"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowBack } from "@/components/icons/ArrowBack";
import styles from "./error/error.module.css";
import _500 from "./error/500.png";
import { Heading } from "@/components/Heading";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Image src={_500} alt="Imagem de Erro 500" />
      <Heading className={styles.heading}>Opa! Ocorreu um erro.</Heading>
      <p className={styles.text}>
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>
      <Link href="/">
        Voltar ao feed <ArrowBack color="#81FE88" />
      </Link>
    </div>
  );
}
