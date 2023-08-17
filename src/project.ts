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

    changeTodoTitle(todoIndex: number, title: string) {
        this.todos[todoIndex].title = title;
    }

    changeTodoDescription(todoIndex: number, description: string) {
        this.todos[todoIndex].description = description;
    }

    changeTodoNote(todoIndex: number, notes: string) {
        this.todos[todoIndex].notes = notes;
    }

    changeDate(todoIndex: number, dueDate: string) {
        this.todos[todoIndex].dueDate = dueDate;
    }

    changePriority(todoIndex: number, priority: string) {
        this.todos[todoIndex].priority = priority;
    }

    removeTodo(todo: TodoItem) {
        let todoIndex: number = this.todos.findIndex((element) => { element === todo});
        this.todos.splice(todoIndex, 1);
    }
}