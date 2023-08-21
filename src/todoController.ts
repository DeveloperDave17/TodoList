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

    loadDefaultPage() {
        this.addProject('Today');
        this.domDisplayer.displayLayout();
        this.domDisplayer.addEventListenerToCreateTodo((title: string, description: string, notes: string, dueDate: string, priority: string) => {
            this.projects[0].addTodo(title, description, dueDate, priority, notes);
        });
    }
}