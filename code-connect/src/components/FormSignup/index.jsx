'use client'

import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { ArrowFoward } from '../icons/ArrowFoward'
import { Input } from '../Input'
import { Label } from '../Label'
import styles from './form-signup.module.css'

export default function FormSignup() {
    return (
        <form className={styles.form}>
          <div>
            <Label>
              Nome
            </Label>
            <Input 
              name="name" 
              id="name" 
              placeholder="Nome completo" 
              required 
            />
          </div>
          <div>
            <Label>
              E-mail
            </Label>
            <Input 
              name="email" 
              id="email" 
              type="email" 
              placeholder="Digite seu e-mail" 
              required 
            />
          </div>
          <div>
            <Label>
              Senha
            </Label>
            <Input 
              name="password" 
              id="password" 
              type="password" 
              required 
            />
            <Checkbox label="Li e aceito os termos de uso" required />
          </div>
          <div className={styles.action}>
            <Button type="submit">
              Cadastrar <ArrowFoward />
            </Button>
          </div>
        </form>
    )
}