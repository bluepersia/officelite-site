import { PropsWithChildren, useContext } from 'react';
import styles from './Option.module.css';
import { SelectContext } from './Select';

type Props = {
  index?: number;
  isCurrent?: boolean;
};

export default function Option({
  children,
  index = 0,
  isCurrent = false,
}: PropsWithChildren<Props>): JSX.Element {
  const { selectIndex, setSelectIndex } = useContext(SelectContext);

  return (
    <p
      onClick={() => !isCurrent && setSelectIndex(index)}
      className={
        styles.option +
        ' ' +
        (isCurrent ? styles.current : selectIndex === index && styles.selected)
      }
    >
      {children}
    </p>
  );
}
