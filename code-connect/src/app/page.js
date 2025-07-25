import logger from "@/logger";
import { CardPost } from "../components/CardPost";
import styles from "./page.module.css";
import Link from "next/link";



async function getAllPosts(page) {
  const response = await fetch(`https://fantastic-space-adventure-65p55544w4qhqg4-3032.app.github.dev/posts?_page=${page}&_per_page=6`);
  if(!response.ok) {
    logger.error("Ops, aconteceu alguma coisa errada.");
    return [];
  }
  logger.info('Posts obtidos com sucesso')
  return response.json();
}

export default async function Home({ searchParams}) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next} = await getAllPosts(currentPage);

  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost post={post} key={post.id}/>)}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
 
    </main>
  );
}
