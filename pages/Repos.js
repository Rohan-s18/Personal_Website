import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RepositoryList from '../Components/RepositoryList'


//  This is the page for the repository list

export default function RepoList(){
    return(
        <div className={styles.container}>

        <Head>
          <title>Rohan's Repositories</title>
        </Head>

        <main className={styles.main}>

          <h1 className={styles.title}>Check out Rohan's Github Repositories</h1>
        
          <RepositoryList />
      
        </main>

      </div>
    )
}