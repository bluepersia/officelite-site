import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
  isValidElement,
  cloneElement,
  Children,
  useEffect,
} from 'react';
import styles from './Select.module.css';

type SelectContextType = {
  selectIndex: number;
  setSelectIndex: Dispatch<SetStateAction<number>>;
};

export const SelectContext = createContext<SelectContextType>({
  selectIndex: 0,
  setSelectIndex: () => {},
});

type Props = {
  value: number;
  onChange: (index: number) => void;
};

export default function Select({
  value,
  onChange,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [dropdown, setDropdown] = useState<boolean>(false);

  let dropdownChildren;

  if (dropdown)
    dropdownChildren = Children.map(children, (child, index) => {
      if (isValidElement(child))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return cloneElement(child as any, { index });

      return child;
    });

  const currentChild = Children.map(children, (child) => {
    if (isValidElement(child))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return cloneElement(child as any, { isCurrent: true });

    return child;
  });

  useEffect(() => {
    onChange(selectIndex);
  }, [selectIndex]);

  useEffect(() => {
    if (value > -1) setSelectIndex(value);
  }, [value]);

  return (
    <SelectContext.Provider value={{ selectIndex, setSelectIndex }}>
      <div onClick={() => setDropdown((val) => !val)} className={styles.select}>
        {currentChild && currentChild[selectIndex]}
        {dropdown && (
          <div className={styles.childrenContainer}>{dropdownChildren}</div>
        )}
      </div>
    </SelectContext.Provider>
  );
}
