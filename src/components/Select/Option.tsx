import { PropsWithChildren, useContext } from 'react';
import styles from './Option.module.css';
import { SelectContext } from './Select';

type Props = {
  index?: number;
};

export default function Option({
  children,
  index = 0,
}: PropsWithChildren<Props>): JSX.Element {
  const { setSelectIndex } = useContext(SelectContext);

  return (
    <p onClick={() => setSelectIndex(index)} className={styles.option}>
      {children}
    </p>
  );
}
