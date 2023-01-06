import styles from './comments.module.css';
import {Trash,ThumbsUp} from 'phosphor-react';
import { Avatar } from '../avatar/avatar';

export const Comments = () =>{
    return(
        <div  className={styles.comments}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/45674699?v=4"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                         <div className={styles.authorAndTime}>
                            <strong> Elson Santos</strong>
                            <time title="11 de Maio ás 05:12:00" dateTime="2022-05-11 05:12:00"> Cerca de 1hora atrás</time>
                         </div>
                         <button title="Deletar comentário">
                            <Trash size={24}/>
                         </button>
                    </header>
                   
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}