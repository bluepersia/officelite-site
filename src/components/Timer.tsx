import styles from './Timer.module.css';

export enum TimerMode {
  Dark = 'dark',
  Light = 'light',
}

export default function Timer({
  mode = TimerMode.Dark,
}: {
  mode?: TimerMode;
}): JSX.Element {
  return (
    <div className={styles.container + ' ' + styles[mode.toString()]}>
      <h4 className={styles.title}>
        Coming <span className={styles.color}>4 Nov 2020</span>
      </h4>
      <div className={styles.timer}>
        <div className={styles.timer_num}>
          <h1 className={styles.timer_num_value}>47</h1>
          <p className={styles.timer_num_label}>days</p>
        </div>
        <div className={styles.timer_num}>
          <h1 className={styles.timer_num_value}>07</h1>
          <p className={styles.timer_num_label}>hours</p>
        </div>
        <div className={styles.timer_num}>
          <h1 className={styles.timer_num_value}>56</h1>
          <p className={styles.timer_num_label}>min</p>
        </div>
        <div className={styles.timer_num}>
          <h1 className={styles.timer_num_value}>14</h1>
          <p className={styles.timer_num_label}>sec</p>
        </div>
      </div>
    </div>
  );
}
