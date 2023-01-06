import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react';
import { Avatar } from '../avatar/avatar';
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
           <img className={styles.cover}
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
            alt="Üser Background"
           />
          <div className={styles.profile}>
            <Avatar hasBorder src="https://avatars.githubusercontent.com/u/45674699?v=4"/>

            {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/45674699?v=4"/> */}
            <strong><p>Elson Santos</p></strong>
            <span>Web Developer</span>
          </div>
          <footer>
            <a href="#">
              <PencilLine size={20}/>
                editar seu perfil
            </a>
          </footer>
        </aside>
    )
}