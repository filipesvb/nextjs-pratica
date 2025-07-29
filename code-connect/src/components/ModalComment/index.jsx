'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { Modal } from "../Modal"
import { SubmitButton } from "../SubmitButton"
import { postComment } from "@/actions"
import styles from "./modalcomment.module.css";
import { SubHeading } from "../SubHeading"
import { Textarea } from "../Textarea"

export const ModalComment = ({action}) => {
    const modalRef = useRef(null);

    return (
        <>
            <Modal ref={modalRef}>
                <form action={action} className={styles.form} onSubmit={() => {modalRef.current.closeModal()}}>
                    <SubHeading>Digite seu comentário abaixo:</SubHeading>
                    <Textarea name="text" className={styles.textarea} rows={8} placeholder="Digite aqui..."></Textarea>
                    <div className={styles.footer}>
                        <SubmitButton className={styles.formButton}>Comentar</SubmitButton>
                    </div>
                </form>
            </Modal>
            <IconButton onClick={() => modalRef.current.openModal()}>
                <Chat />
            </IconButton>
        </>
    )
}