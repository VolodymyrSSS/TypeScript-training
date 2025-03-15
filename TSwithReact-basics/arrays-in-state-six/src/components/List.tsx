import { useState } from 'react';

interface ArtworkTitleProps {
    id: number;
    title: string;
}

const initialList: ArtworkTitleProps[] = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List(): React.ReactElement {
    const [list, setList] = useState<ArtworkTitleProps[]>(initialList);
  
    function handleClick() {
      /*You may want to reverse or sort an array. The JavaScript reverse() 
      and sort() methods are mutating the original array, so you can’t use 
      them directly.*/
      const nextList = [...list]; // copy the array first
      nextList.reverse(); // and then make changes to it (in this case reverse)
      setList(nextList);
    }
  
    return (
      <>
        <button onClick={handleClick}>
          Reverse
        </button>
        <ul>
          {list.map(artwork => (
            <li key={artwork.id}>{artwork.title}</li>
          ))}
        </ul>
      </>
    );
  }  

