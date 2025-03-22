import React, { useState } from 'react';

/* This component has two visual states: when the image is active, and when the image is inactive:
- When the image is active, the CSS classes are background and picture picture--active.
- When the image is inactive, the CSS classes are background background--active and picture.
That is why we may create variables with this classes: 'background' and 'picture'. */

// export default function Picture(): React.ReactElement {
//     const [isActive, setIsActive] = useState<boolean>(false);

//     let backgroundClassName: string = 'background';
//     let pictureClassName: string = 'picture';
//     if (isActive) {
//         pictureClassName += ' picture--active'
//     } else {
//         backgroundClassName += ' background--active'
//     }

//     return (
//       <div className={backgroundClassName} onClick={() => setIsActive(false)}>
//         <img
//           onClick={(e) => {
//             e.stopPropagation(); // to ensure the image doesn’t register as a click on the background
//             setIsActive(true);
//           }}
//           className={pictureClassName}
//           alt="Rainbow houses in Kampung Pelangi, Indonesia"
//           src="https://i.imgur.com/5qwVYb1.jpeg"
//         />
//       </div>
//     );
//   }

// Alternatively, you could return two separate chunks of JSX:

export default function Picture(): React.ReactElement {
    const [isActive, setIsActive] = useState<boolean>(false);

    if (isActive) {
      return (
        <div
          className="background"
          onClick={() => setIsActive(false)}
        >
          <img
            className="picture picture--active"
            alt="Rainbow houses in Kampung Pelangi, Indonesia"
            src="https://i.imgur.com/5qwVYb1.jpeg"
            onClick={e => e.stopPropagation()} // to ensure the image doesn’t register as a click on the background
          />
        </div>
      );
    }
    return (
      <div className="background background--active">
        <img
          className="picture"
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={() => setIsActive(true)}
        />
      </div>
    );
  }
  