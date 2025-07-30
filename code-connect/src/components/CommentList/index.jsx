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
                        const submitReply = postReply.bind(null, comment.id);

                        return (
                            <li  key={comment.id} >
                                <Comment comment={comment}/>
                                <ModalReply comment={comment} />
                                <Replies />
                            </li>
                        )
                    }

                    
                    )}
            
            </ul>
        </section>
    )
}