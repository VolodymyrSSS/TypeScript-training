import React from 'react';
import { ArtworksTitleProps } from './BucketList';

interface ItemListProps {
    artworks: ArtworksTitleProps[];
    onToggle: (artworkId: number, nextSeen: boolean) => void; // function to handle toggling
  }

export default function ItemList({ artworks, onToggle }: ItemListProps): React.ReactElement {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label className='container'>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {onToggle(artwork.id, e.target.checked)}}
              />
              <span className="checkmark"></span>
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }
