import styles from './SignUp.module.css';
import imgLogo from '../assets/img/shared/logo.svg';
import Timer, { TimerMode } from '../components/Timer';
import Select from '../components/Select/Select';
import Option from '../components/Select/Option';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

type FormData = {
  name: string;
  email: string;
  package: number;
  phone: string;
  company: string;
};

type FormErrors = {
  name: string;
  email: string;
  phone: string;
  company: string;
};
function isPhoneNumber(str: string): boolean {
  return Boolean(
    str.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
  );
}

function isEmail(str: string): boolean {
  return Boolean(str.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/));
}

export default function SignUp(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    package: 0,
    phone: '',
    company: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  function handleSelectChange(value: number): void {
    setFormData((formData) => ({ ...formData, package: value }));
  }

  function handleInputChange(e: React.ChangeEvent): void {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleFormSubmit(e: FormEvent): void {
    e.preventDefault();

    const errors: FormErrors = {
      name: '',
      email: '',
      phone: '',
      company: '',
    };

    if (!formData.name) errors.name = 'Required';
    else if (formData.name.length < 2)
      errors.name = 'Must be at least 2 characters';

    if (!formData.email) errors.email = 'Required';
    else if (!isEmail(formData.email)) errors.email = 'Must be a valid email';

    if (!formData.phone) errors.phone = 'Required';
    else if (!isPhoneNumber(formData.phone.toString()))
      errors.phone = 'Must be a valid phone number';

    if (!formData.company) errors.company = 'Required';

    setFormErrors(errors);

    console.log(errors);
  }

  function handleInputMousedown(e: React.MouseEvent): void {
    setFormErrors((formErrors) => ({
      ...formErrors,
      [(e.target as HTMLInputElement).name]: '',
    }));

    setFormData((formData) => formData);
  }

  return (
    <div className={styles.signup}>
      <div className={styles.sectionA}>
        <header className={styles.header}>
          <Link to='/'>
            <img src={imgLogo} className={styles.logo} alt='Officelite logo' />
          </Link>
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
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div
            className={
              styles.textfield_wrapper +
              ' textfield_wrapper ' +
              (formErrors.name && 'invalid')
            }
          >
            <input
              type='text'
              className='textfield'
              placeholder='Name'
              name='name'
              value={formErrors.name || formData.name}
              onChange={handleInputChange}
              onMouseDown={handleInputMousedown}
            />
          </div>
          <div
            className={
              styles.textfield_wrapper +
              ' textfield_wrapper ' +
              (formErrors.email && 'invalid')
            }
          >
            <input
              type='text'
              className='textfield'
              placeholder='Email address'
              name='email'
              value={formErrors.email || formData.email}
              onChange={handleInputChange}
              onMouseDown={handleInputMousedown}
            />
          </div>
          <Select value={formData.package} onChange={handleSelectChange}>
            <Option>
              Basic pack<span>Free</span>
            </Option>
            <Option>
              Pro pack<span>$9.99</span>
            </Option>
            <Option>
              Ultimate pack<span>$19.99</span>
            </Option>
          </Select>
          <div
            className={
              styles.textfield_wrapper +
              ' textfield_wrapper ' +
              (formErrors.phone && 'invalid')
            }
          >
            <input
              type='text'
              className='textfield'
              placeholder='Phone number'
              name='phone'
              value={formErrors.phone || formData.phone}
              onChange={handleInputChange}
              onMouseDown={handleInputMousedown}
            />
          </div>
          <div
            className={
              styles.textfield_wrapper +
              ' textfield_wrapper ' +
              (formErrors.company && 'invalid')
            }
          >
            <input
              type='text'
              className='textfield'
              name='company'
              placeholder='Company'
              value={formErrors.company || formData.company}
              onChange={handleInputChange}
              onMouseDown={handleInputMousedown}
            />
          </div>
          <button className={styles.form_btn + ' btn-1'}>
            Get on the list
          </button>
        </form>
      </div>
    </div>
  );
}
