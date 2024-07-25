import '../../index.css';

type TodoCardProps = {
	title: string;
	description: string;
};

const TodoCard: React.FC<TodoCardProps> = ({ title, description }) => {
	return (
		<div className='todo-card'>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default TodoCard;
