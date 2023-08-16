import { TodoItem } from "./todoItem";

export class Project {
    title: string;
    todos: Array<TodoItem>;

    constructor(title: string) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo: TodoItem) {
        this.todos.push(todo);
    }

    removeTodo(todo: TodoItem) {
        let todoIndex: number = this.todos.findIndex((element) => { element === todo});
        this.todos.splice(todoIndex, 1);
    }
}