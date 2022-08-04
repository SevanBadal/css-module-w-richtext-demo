import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import DOMPurify from 'isomorphic-dompurify';

export default function Home() {
  function createMarkupString() {
    return '<script>alert("hello")</script><h3>I\'m an H3</h3><p>First &middot; Second</p>';
  }
  return (
    <div className={styles.container}>
      <h1>Rich Text w/styles Demo</h1>
      <Card richTextString={createMarkupString()} />
    </div>
  )
}
