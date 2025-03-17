import { useState } from 'react';
import ItemList from './ItemList';

export interface ArtworksTitleProps {
    id: number;
    title: string;
    seen: boolean;
}

const initialList: ArtworksTitleProps[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList(): React.ReactElement {
  const [myList, setMyList] = useState<ArtworksTitleProps[]>(initialList);
  const [yourList, setYourList] = useState<ArtworksTitleProps[]>(initialList);

  function handleToggleMyList(artworkId: number, nextSeen: boolean): void {
    /* For solution, we can use method map to substitute an old 
    item with its updated version without mutation.*/
    setMyList(myList.map(artwork => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
    }));
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean): void {
    /*You can use map to substitute an old item with its updated version without mutation. */
    setYourList(yourList.map(artwork => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}
