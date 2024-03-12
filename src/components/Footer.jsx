import styles from '../styles/footer.module.css';

export default function Footer({completedTasks, totalTasks}){
  return(
    <div className={styles.footer}>
      <h3>You Completed {completedTasks} Tasks out of {totalTasks}. </h3>
    </div>
  )
}