import styles from "./index.module.scss";

export default function Loader() {
	return (
		<div className={styles.overlay}>
			<div className={`${styles.spinner} ${styles.center}`}>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
				<div className={styles.spinner_blade}></div>
			</div>
		</div>
	);
}
