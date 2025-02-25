import React from 'react';
import Button from './Button';

interface ToolbarProps {
	onPlayMovie: () => void;
	onUploadImage: () => void;
}

export default function Toolbar({
	onPlayMovie,
	onUploadImage,
}: ToolbarProps): React.ReactElement {
	return (
		<div>
			<Button onClick={onPlayMovie}>Play Movie</Button>
			<Button onClick={onUploadImage}>Upload Image</Button>
		</div>
	);
}
