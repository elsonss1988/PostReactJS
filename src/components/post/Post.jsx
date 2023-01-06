import styles from './Post.module.css'
import {Comments} from '../comments/comments'
import { Avatar } from '../avatar/avatar'

export const Post = () => {
    return(
        <>
          <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/45674699?v=4"/> */}
                    <Avatar hasBorder src="https://avatars.githubusercontent.com/u/45674699?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Elson Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de Maio ás 05:12:00" dateTime="2022-05-11 05:12:00">Publicado a 1hora</time>
            </header>
            <div className={styles.content}>
            <p> Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa.
            É um projeto que fiz no NLW Return, evento da Rocketseat.
            O nome do projeto é DoctorCare 🚀</p>

            <p>👉 jane.design/doctorcare</p>

            <p>
            <a href=""> #novoprojeto </a>{' '}
            <a href=""> #nlw </a>{' '}
            <a href=""> #rocketseat</a>{' '}
            </p>
  
            </div>
            <form className={styles.commentForm}>
                <strong> Deixe seu comentário</strong>
                <textarea placeholder="Deixe seu comentário "/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <hr/>
            <div className={styles.commentList}>
                <Comments/>
                <Comments/>
                <Comments/>
            </div>
          </article>
        </>
    )
}