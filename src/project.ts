import { TodoItem } from "./todoItem";

export class Project {
    title: string;
    todos: Array<TodoItem>;
    completedTodos: Array<TodoItem>;

    constructor(title: string) {
        this.title = title;
        this.todos = [];
        this.completedTodos = [];
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

    removeTodo(targetTodo: TodoItem) {
        if (this.todos.includes(targetTodo)) {
            this.todos = this.todos.filter((todo) => todo !== targetTodo);
        } else {
            this.removeCompletedTodo(targetTodo);
        }
    }

    removeCompletedTodo(targetTodo: TodoItem) {
        this.completedTodos = this.completedTodos.filter((todo) => todo !== targetTodo);
    }

    toggleCompleteTodo(todo: TodoItem) {
        if (this.todos.includes(todo)) {
            this.removeTodo(todo);
            this.completedTodos.push(todo);
        } else {
            this.removeTodo(todo);  
            this.todos.push(todo);
        }
    }
}