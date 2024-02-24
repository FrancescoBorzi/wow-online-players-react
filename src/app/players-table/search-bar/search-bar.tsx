import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  filterText: string;
  onFilterTextChange: Dispatch<SetStateAction<string>>;
}

export function SearchBar(props: SearchBarProps) {
  return (
    <div>
      <input
        className="block rounded-md border-2 py-1.5 pl-7 pr-20 text-gray-900 m-auto mb-2"
        value={props.filterText}
        onChange={(e) => props.onFilterTextChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
