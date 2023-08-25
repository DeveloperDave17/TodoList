import { Project } from "./project";
import { DOMDisplayer } from "./domdisplayer";
import { TodoItem } from "./todoItem";

export class TodoController {
    projects: Array<Project>;
    domDisplayer: DOMDisplayer = new DOMDisplayer();

    constructor() { this.projects = []; }

    removeProject(projectToRemove: Project) { 
        this.projects.filter((project) => project !== projectToRemove);
    }

    removeTodo(project: Project, todoToRemove: TodoItem) {
        project.todos.filter((todo) => todo !== todoToRemove);
    }

    createTodo(project: Project) {
        let defaultTodoTitle: string = "Title";
        let defaultTodoDescription: string = "description";
        let defaultDate: string = "01/01/0000";
        let defaultPriority: string = "none";
        let defaultNotes: string = "...";
        let todo = new TodoItem(defaultTodoTitle, defaultTodoDescription, defaultDate, defaultPriority, defaultNotes);
        project.todos.push(todo);
        this.domDisplayer.displayTodoBeforeCreateDiv(todo, () => { this.removeTodo(project, todo)});
    }

    loadDefaultPage() {
        let today = new Project('Today');
        this.projects.push(today);
        this.domDisplayer.displayLayout(() => { this.loadProject(today) }, () => { this.createProject(); });
        this.domDisplayer.displayProject(today);
        this.domDisplayer.addEventListenerToCreateTodo(() => {
            this.createTodo(today);
        });
    }

    loadTodos(project: Project) {
        for (let todo of project.todos) {
            this.domDisplayer.displayTodoBeforeCreateDiv(todo, () => { this.removeTodo(project, todo)});
        }
    }

    createProject() {
        let defaultProjectName = 'New Project';
        let project = new Project(defaultProjectName);
        this.projects.push(project);
        this.domDisplayer.removeProjectContainer();
        this.domDisplayer.displayProjectWithEditableName(project);
        this.domDisplayer.addEventListenerToCreateTodo(() => {
            this.createTodo(project);
        });
        this.domDisplayer.displayProjectInSidePanel(project.title, () => { this.loadProject(project) });
    }

    loadProject(project: Project) {
        this.domDisplayer.removeProjectContainer();
            this.domDisplayer.displayProjectWithEditableName(project);
            this.domDisplayer.addEventListenerToCreateTodo(() => {
                this.createTodo(project);
            });
            this.loadTodos(project);
    }
}