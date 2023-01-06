import {Post} from "./components/post/Post"
import {Header} from "./components/header/Header"
import { Sidebar } from "./components/sidebar/Sidebar"
import styles from './App.module.css';
import './global.css'
;

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <h1>Your Posts</h1>
          <Post 
            author="Elson Santos" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          "/>
         {/* <Post
            author="Elder Santos"
            content="Keep it simple, stupid!"
         /> */}
        </main>
      </div>
      
  
    </>
  )
}

export default App
