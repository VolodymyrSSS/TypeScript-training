import React from 'react';
import { DataComments } from '../../../types/index';
import Comment from '../Comment/Comment';

interface CommentsProps {
	comments: DataComments[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
	return (
		<ul className='list-comments'>
			{comments.map((comment) => {
				return <Comment key={comment.id} comment={comment} />;
			})}
		</ul>
	);
};

export default Comments;
