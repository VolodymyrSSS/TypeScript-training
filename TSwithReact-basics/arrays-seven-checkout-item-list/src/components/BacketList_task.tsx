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
  /* Two separate artwork lists have the same initial state. They are supposed 
  to be isolated, but because of a mutation, their state is accidentally shared, 
  and checking a box in one list affects the other list. */
  const [myList, setMyList] = useState<ArtworksTitleProps[]>(initialList);
  const [yourList, setYourList] = useState<ArtworksTitleProps[]>(initialList);

  function handleToggleMyList(artworkId: number, nextSeen: boolean): void {
    /* Even if you copy an array, you can’t mutate existing items inside of it 
      directly. This is because copying is shallow—the new array will contain the 
      same items as the original one. So if you modify an object inside the copied 
      array, you are mutating the existing state. 
      Although the myNextList array itself is new, the items themselves are 
      the same as in the original myList array.*/
    const myNextList = [...myList];
    const artwork = myNextList.find(a => a.id === artworkId);

    // .find() could return undefined if the item isn't found
    if (artwork) {
        artwork.seen = nextSeen; // Problem: mutates an existing item - changing artwork.seen changes the original artwork item
    }

    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean): void {
    /*Although the yourNextList array itself is new, the items themselves are 
    the same as in the original yourList array. */
    const yourNextList = [...yourList];
    const artwork = yourNextList.find(a => a.id === artworkId);

    // .find() could return undefined if the item isn't found
    if (artwork) {
        artwork.seen = nextSeen; // Problem: mutates an existing item - changing artwork.seen changes the original artwork item
    }

    setYourList(yourNextList);
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
