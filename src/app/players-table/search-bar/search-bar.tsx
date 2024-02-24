import styles from './search-bar.module.scss';
import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  nameFilter: string;
  onFilterNameChange: Dispatch<SetStateAction<string>>;
}

export function SearchBar(props: SearchBarProps) {
  return (
    <div className={styles['container']}>
      <input value={props.nameFilter} onChange={(e) => props.onFilterNameChange(e.target.value)} />
    </div>
  );
}

export default SearchBar;
