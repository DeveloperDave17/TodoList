import { TodoItem } from "./todoItem";

export class Project {
    title: string;
    todos: Array<TodoItem>;

    constructor(title: string) {
        this.title = title;
        this.todos = [];
    }

    addTodo(title: string, description: string, dueDate: string, priority: string, notes: string) {
        this.todos.push(new TodoItem(title, description, dueDate, priority, notes));
    }

    removeTodo(todo: TodoItem) {
        let todoIndex: number = this.todos.findIndex((element) => { element === todo});
        this.todos.splice(todoIndex, 1);
    }
}