import { DataComments } from '../types/index';

export let comments: DataComments[] = [
	{
		id: 1,
		text: 'message 1',
	},
	{
		id: 2,
		text: 'message 2',
		children: [
			{
				id: 4,
				text: 'message 4',
				children: [
					{
						id: 7,
						text: 'message 7',
					},
					{
						id: 8,
						text: 'message 8',
						children: [
							{
								id: 9,
								text: 'message 9',
							},
							{
								id: 10,
								text: 'message 10',
							},
						],
					},
				],
			},
			{
				id: 5,
				text: 'message 5',
			},
		],
	},
];
