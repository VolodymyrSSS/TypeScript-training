import { useState } from 'react';
import { useImmer } from 'use-immer';
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
  const [myList, updatetMyList] = useImmer<ArtworksTitleProps[]>(initialList);
  const [yourList, updateYourList] = useImmer<ArtworksTitleProps[]>(initialList);

  /* Immer always constructs the next state from scratch according to the changes that you’ve 
  done to the draft. This keeps your event handlers very concise without ever mutating state.*/

  function handleToggleMyList(id: number, nextSeen: boolean): void {
    updatetMyList(draft => {
        // you’re not mutating the original state, but you’re mutating a special draft object provided by Immer
        const artwork = draft.find(a =>a.id === id);
        if (artwork) {
            artwork.seen = nextSeen; // changing artwork.seen changes the original artwork item but not with immer
        }
    });
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean): void {
    updateYourList(draft => {
        // you’re not mutating the original state, but you’re mutating a special draft object provided by Immer
        const artwork = draft.find(a =>a.id === artworkId);
        if (artwork) {
            artwork.seen = nextSeen; // changing artwork.seen changes the original artwork item but not with immer
        }
    });
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
