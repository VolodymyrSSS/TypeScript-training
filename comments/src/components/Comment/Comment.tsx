import { useState } from 'react';

import { DataComments } from '../../../types/index';
import Comments from '../Comments/Comments';

interface CommentProps {
	comment: DataComments;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleChildren = () => setIsOpen(!isOpen);

	return (
		<li>
			<p
				onClick={toggleChildren}
				role='button'
				tabIndex={0}
				aria-expanded={isOpen}
			>
				{comment.text}
			</p>
			{/* Render children comments if they exist. Handle cases where
          comment.children might be an empty array which could render
          an unnecessary Comments wrapper.*/}
			{isOpen && comment.children && comment.children.length > 0 && (
				<Comments comments={comment.children} />
			)}
		</li>
	);
};

export default Comment;

/*Non-focusable Element as Interactive: <p> tags are not focusable by 
default since they are typically used for displaying text, not for user 
interaction. When you add an onClick handler to a <p> tag, indicating 
that the tag is interactive (users can click on it), it is good practice 
to make it navigable via keyboard as well by setting tabIndex="0". This 
allows users who rely on keyboard navigation (including those with certain 
disabilities) to access this interactive feature.*/
