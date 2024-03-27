import styles from './SignUp.module.css';
import imgLogo from '../assets/img/shared/logo.svg';
import Timer, { TimerMode } from '../components/Timer';
import Select from '../components/Select/Select';
import Option from '../components/Select/Option';

export default function SignUp(): JSX.Element {
  return (
    <div className={styles.signup}>
      <div className={styles.sectionA}>
        <header className={styles.header}>
          <img src={imgLogo} className={styles.logo} alt='Officelite logo' />
        </header>
        <div className={styles.content}>
          <h1 className={styles.title}>Work smarter. Save time.</h1>
          <p className={styles.body}>
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </p>
          <Timer mode={TimerMode.Light} />
        </div>
      </div>
      <div className={styles.sectionB}>
        <form className={styles.form}>
          <input type='text' className={styles.input} placeholder='Name' />
          <input type='text' className={styles.input} placeholder='Name' />
          <Select>
            <Option>
              Basic pack<span>Free</span>
            </Option>
            <Option>
              Pro pack<span>$9.99</span>
            </Option>
            <Option>
              Ultiamte pack<span>$19.99</span>
            </Option>
          </Select>
          <input
            type='number'
            className={styles.input}
            placeholder='Phone number'
          />
          <input type='text' className={styles.input} placeholder='Company' />
        </form>
      </div>
    </div>
  );
}
