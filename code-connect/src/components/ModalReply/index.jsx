'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { Modal } from "../Modal"
import { SubmitButton } from "../SubmitButton"
import { postReply } from "@/actions"
import styles from "./modalreply.module.css";
import { SubHeading } from "../SubHeading"
import { Textarea } from "../Textarea"
import { TextButton } from "../TextButton"
import { Comment } from "../Comment"

export const ModalReply = ({ comment }) => {
    const modalRef = useRef(null);
    const action = postReply.bind(null, comment)

    return (
        <>
            <Modal ref={modalRef}>
                <form action={action} className={styles.form} onSubmit={() => { modalRef.current.closeModal() }}>
                    <div className={styles.body}>
                        <Comment comment={comment} />
                    </div>
                    <div className={styles.divider}></div>
                    <Textarea nome="text" className={styles.textarea} rows={8} placeholder="Digite aqui..."></Textarea>
                    <div className={styles.footer}>
                        <SubmitButton>Responder</SubmitButton>
                    </div>
                </form>
            </Modal>
            <TextButton onClick={() => modalRef.current.openModal()}>
                <span>
                    Responder
                </span>
            </TextButton>
        </>
    )
}