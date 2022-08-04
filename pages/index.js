import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Rich Text w/styles Demo</h1>
      <Card />
    </div>
  )
}
