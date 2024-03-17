import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" alt="로고" />
    </div>
  );
}
