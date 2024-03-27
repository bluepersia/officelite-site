import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
  isValidElement,
  cloneElement,
  Children,
} from 'react';
import styles from './Select.module.css';

type SelectContextType = {
  selectIndex: number;
  setSelectIndex: Dispatch<SetStateAction<number>>;
};

export const SelectContext = createContext<SelectContextType>({
  selectIndex: -1,
  setSelectIndex: () => {},
});
type Props = {
  options: string[];
  placeholder?: string;
};

export default function Select({
  children,
  options,
  placeholder = '',
}: PropsWithChildren<Props>): JSX.Element {
  const [selectIndex, setSelectIndex] = useState<number>(-1);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return cloneElement(child as any, { index });

    return child;
  });

  return (
    <SelectContext.Provider value={{ selectIndex, setSelectIndex }}>
      <div onClick={() => setDropdown((val) => !val)} className={styles.select}>
        <p className={styles.placeholder}>
          {selectIndex == -1 ? placeholder : options[selectIndex]}
        </p>
        {dropdown && (
          <div className={styles.childrenContainer}>{childrenWithProps}</div>
        )}
      </div>
    </SelectContext.Provider>
  );
}
