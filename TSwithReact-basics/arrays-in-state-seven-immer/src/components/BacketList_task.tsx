import { useState } from 'react';
import ArtItemList from './ArtItemList';

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
  const [myList, updatetMyList] = useState<ArtworksTitleProps[]>(initialList);
  const [yourList, updateYourList] = useState<ArtworksTitleProps[]>(initialList);

  function handleToggleMyList(artworkId: number, nextSeen: boolean): void {
    const myNextList = [...myList];
    const artwork = myNextList.find(a => a.id === artworkId);
    // .find() could return undefined if the item isn't found
    if (artwork) {
        artwork.seen = nextSeen; // mutates an existing item - changing artwork.seen changes the original artwork item
    }

    updatetMyList(myNextList);
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean): void {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find(a => a.id === artworkId);
    // .find() could return undefined if the item isn't found
    if (artwork) {
        artwork.seen = nextSeen; // mutates an existing item - changing artwork.seen changes the original artwork item
    }

    updateYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ArtItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ArtItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}
