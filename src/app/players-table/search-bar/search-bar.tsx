import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  nameFilter: string;
  onFilterNameChange: Dispatch<SetStateAction<string>>;
}

export function SearchBar(props: SearchBarProps) {
  return (
    <div>
      <input
        className="block rounded-md border-2 py-1.5 pl-7 pr-20 text-gray-900 m-auto mb-2"
        value={props.nameFilter}
        onChange={(e) => props.onFilterNameChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
