import { TodoProps } from '../components/TaskApp';

export function getNextId(todos: TodoProps[]): number {
  // find the maximum id in the todos and add 1
  const maxId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) : 0;
  return maxId + 1;
}
