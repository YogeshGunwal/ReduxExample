import styles from '../styles/header.module.css';

export default function Header({children}){
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}