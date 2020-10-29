import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

const name = "Adam"
export const siteTitle = "Next.js Site"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>{children}</div>
  )
}
