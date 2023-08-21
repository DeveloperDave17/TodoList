import { Project } from "./project";
import { DOMDisplayer } from "./domdisplayer";
import { TodoItem } from "./todoItem";

export class TodoController {
    projects: Array<Project>;
    domDisplayer: DOMDisplayer = new DOMDisplayer();

    constructor() { this.projects = [] }

    addProject(title: string) { this.projects.push(new Project(title))}

    addTodo(projectIndex: number) {
        let defaultTodoTitle: string = "Title";
        let defaultTodoDescription: string = "description";
        let defaultDate: string = "01/01/0000";
        let defaultPriority: string = "none";
        let defaultNotes: string = "...";
        this.projects[projectIndex].addTodo(defaultTodoTitle, defaultTodoDescription, defaultDate, defaultPriority, defaultNotes);
    }

    changeProjectTitle(projectIndex: number, title: string) {
        this.projects[projectIndex].title = title;
    }

    changeTodoTitle(projectIndex: number, todoIndex: number, title: string) {
        this.projects[projectIndex].changeTodoTitle(todoIndex, title);
    }

    changeTodoDescription(projectIndex: number, todoIndex: number, description: string) {
        this.projects[projectIndex].changeTodoDescription(todoIndex, description);
    }

    changeTodoNote(projectIndex: number, todoIndex: number, notes: string) {
        this.projects[projectIndex].changeTodoNote(todoIndex, notes);
    }

    changeDate(projectIndex: number, todoIndex: number, dueDate: string) {
        this.projects[projectIndex].changeDate(todoIndex, dueDate);
    }

    changePriority(projectIndex: number, todoIndex: number, priority: string) {
        this.projects[projectIndex].changePriority(todoIndex, priority);
    }

    removeProject(index: number) { this.projects.splice(index, 1) }

    removeTodo(projectIndex: number, todoIndex: number) { 
        this.projects[projectIndex].todos.splice(todoIndex, 1);
    }

    createTodo(projectIndex: number) {
        let defaultTodoTitle: string = "Title";
        let defaultTodoDescription: string = "description";
        let defaultDate: string = "01/01/0000";
        let defaultPriority: string = "none";
        let defaultNotes: string = "...";
        this.projects[projectIndex].addTodo(defaultTodoTitle, defaultTodoDescription, defaultDate, defaultPriority, defaultNotes);
        let todoIndex = this.projects[projectIndex].todos.length - 1;
        this.domDisplayer.displayTodo(defaultTodoTitle, defaultDate, defaultPriority);
        this.domDisplayer.addEventListenerToTodo(todoIndex, () => this.expandTodo(projectIndex, todoIndex))
    }

    expandTodo(projectIndex: number, todoIndex: number) {
        const project = this.projects[projectIndex];
        const todo = project.todos[todoIndex];
        this.domDisplayer.displayExpandedTodo(todoIndex, todo.title, todo.description, todo.notes, todo.priority, todo.dueDate);
    }

    loadDefaultPage() {
        this.addProject('Today');
        this.domDisplayer.displayLayout();
        this.domDisplayer.addEventListenerToCreateTodo(() => {
            this.createTodo(0);
        });
    }
}