'use client'
import { useFormStatus } from "react-dom"
import { Spinner } from "../Spinner";
import { ArrowFoward } from "../icons/ArrowForward";

import styles from './modalcommentbutton.module.css'


export const SubmitButton = ({children}) => {

    const {pending} = useFormStatus();

    return (
        <button className={styles.button}>
            {children}
            {pending ? <Spinner /> : <ArrowFoward />}
        </button>

    )
}