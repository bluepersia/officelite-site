import styles from './Home.module.css';
import imgLogo from '../assets/img/shared/logo.svg';
import imgIllustration from '../assets/img/home/illustration-charts.svg';
import Timer, { TimerMode } from '../components/Timer';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <Link to='/'>
          <img src={imgLogo} className={styles.logo} alt='Officelite logo' />
        </Link>

        <div className={styles.hero}>
          <div className={styles.hero_content}>
            <h2 className={styles.title}>
              A simple solution to complex tasks is coming soon
            </h2>
            <p className={styles.hero_body}>
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
            <Link to='sign-up' className={styles.hero_btn + ' btn-1'}>
              Get Started
            </Link>
          </div>
          <img
            src={imgIllustration}
            className={styles.hero_illustration}
            alt='Statistics'
          />
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section1}>
          <div className={styles.plans}>
            <div className={styles.plan}>
              <div className={styles.plan_content}>
                <h3 className={styles.plan_title}>Basic</h3>
                <h1 className={styles.plan_cost}>Free</h1>
                <p className={styles.plan_users}>Up to 5 users for free</p>
              </div>
              <ul className={styles.plan_features}>
                <li className={styles.plan_feature}>
                  Basic document collaboration
                </li>
                <li className={styles.plan_feature}>2 GB storage</li>
                <li className={styles.plan_feature}>
                  Great security and support
                </li>
              </ul>
              <Link to='sign-up' className={styles.plan_btn + ' btn-2'}>
                Try for Free
              </Link>
            </div>

            <div className={styles.plan}>
              <div className={styles.plan_content}>
                <h3 className={styles.plan_title}>Pro</h3>
                <h1 className={styles.plan_cost}>$9.99</h1>
                <p className={styles.plan_users}>Per user, billed monthly</p>
              </div>
              <ul className={styles.plan_features}>
                <li className={styles.plan_feature}>
                  All essential integrations
                </li>
                <li className={styles.plan_feature}>50 GB storage</li>
                <li className={styles.plan_feature}>
                  More control and insights
                </li>
              </ul>
              <Link to='sign-up' className={styles.plan_btn + ' btn-3'}>
                Try for Free
              </Link>
            </div>

            <div className={styles.plan}>
              <div className={styles.plan_content}>
                <h3 className={styles.plan_title}>Ultimate</h3>
                <h1 className={styles.plan_cost}>$19.99</h1>
                <p className={styles.plan_users}>Per user, billed monthly</p>
              </div>
              <ul className={styles.plan_features}>
                <li className={styles.plan_feature}>Robust work management</li>
                <li className={styles.plan_feature}>100 GB storage</li>
                <li className={styles.plan_feature}>VIP support</li>
              </ul>
              <Link to='sign-up' className={styles.plan_btn + ' btn-2'}>
                Try for Free
              </Link>
            </div>
          </div>

          <div className={styles.cta}>
            <Timer mode={TimerMode.Dark} />
            <Link to='sign-up' className={styles.cta_btn + ' btn-1'}>
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
