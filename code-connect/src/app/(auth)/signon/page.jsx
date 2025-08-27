import Image from 'next/image'
import banner from './banner-signon.png'

import styles from './signon.module.css'
import { TextDivider } from '@/components/TextDivider'
import { Providers } from '@/components/Providers'
import Link from 'next/link'
import { Login } from '@/components/icons/Login'
import FormSignup from '@/components/FormSignup'

export default async function SignOn() {

  return (
    <main className={styles.main}>
      <div>
        <Image src={banner} alt='Banner' priority />
      </div>
      <div className={styles.container}>
        <h1>
          Cadastro
        </h1>
        <h2>
          Olá! Preencha seus dados.
        </h2>
        <FormSignup />
        <div className={styles.providers}>
          <TextDivider text="ou entre com outras contas" />
          <Providers />
        </div>
        <footer className={styles.footer}>
          <p>
            Já tem conta?
          </p>
          <p>
            <Link href='/signin'>Faça seu login! <Login color="#81FE88" /></Link>
          </p>
        </footer>
      </div>
    </main>
  )
}