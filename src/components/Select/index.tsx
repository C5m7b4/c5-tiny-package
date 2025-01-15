import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from '../../icons';

type labelPosition = 'top' | 'left';

export interface SelectProps<T> {
  data: T[];
  displayKey: keyof T;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (e: T) => void;
  labelPosition?: labelPosition;
}

const Select = <T,>({
  data,
  displayKey,
  label,
  onSelect,
  labelPosition = 'top',
}: SelectProps<T>) => {
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [query, setQuery] = useState<string>('');

  const componentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    if (!triggerRef.current) return;
    if (!listRef.current) return;

    if (!triggerRef.current.contains(e.target as Node)) {
      if (!listRef.current.contains(e.target as Node)) {
        listRef.current.setAttribute('data-display', 'closed');
      }
    }
  };

  useEffect(() => {
    if (query.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          String(item[displayKey]).toLowerCase().includes(query.toLowerCase()),
        ),
      );
    }
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [query, data, displayKey]);

  const handleTriggerClick = () => {
    if (!listRef.current) return;

    setQuery('');

    const currentStatus = listRef.current.getAttribute('data-display');
    listRef.current.setAttribute(
      'data-display',
      currentStatus === 'open' ? 'closed' : 'open',
    );
  };

  const handleSelect = (item: T) => {
    if (onSelect) {
      onSelect(item);
      if (listRef.current) {
        listRef.current.setAttribute('data-display', 'closed');
      }
    }
    setQuery(item[displayKey] as string);
  };

  return (
    <div ref={componentRef} className="w-full">
      <div className={`flex ${labelPosition === 'top' ? 'flex-col' : ''} mt-2`}>
        <label className="flex place-items-center h-full w-full py-1 pr-2">
          {label}
        </label>
        <div className="relative">
          <div ref={triggerRef}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={(e) => e.target.select()}
              type="text"
              className="rounded-lg shadow-md px-2 py-1 
                outline-none border-none ring-0 focus:ring-0"
            />
            <div onClick={handleTriggerClick}>
              <ChevronDown
                height={18}
                width={18}
                stroke={'transparent'}
                fill={'#000'}
                className="absolute top-0 right-0 cursor-pointer pr-2 pt-2"
              />
            </div>
          </div>
        </div>
        <div
          data-display="closed"
          ref={listRef}
          className="rounded-b-lg data-[display=closed]:animate-dissappear
            data-[display=open]:animate-appear"
        >
          {filteredData.map((item, index) => {
            return (
              <div
                onClick={() => {
                  handleSelect(item);
                }}
                className="cursor-pointer w-full bg-white text-black text-left
                px-2 py-2  shadow-md
                 hover:bg-slate-400 transition-all duration-500
                 last:rounded-b-lg"
                key={`sel-item-${index}`}
              >
                {String(item[displayKey])}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;