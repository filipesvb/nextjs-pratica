import { postReply } from "@/actions"
import { Comment } from "../Comment"
import { ModalReply } from "../ModalReply"
import { Replies } from "../Replies"
import styles from "./commentlist.module.css"


export const CommentList = ({ comments }) => {

  

    return (

        <section className={styles.comments}>
            <h2>Comentários</h2>


            <ul className={styles.commentList}>
            
                    {comments.map(comment => {
                        return (
                            <li  key={comment.id} >
                                <Comment comment={comment}/>
                                <ModalReply comment={comment} />
                                <Replies comment={comment} />
                            </li>
                        )
                    }

                    
                    )}
            
            </ul>
        </section>
    )
}