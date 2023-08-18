import barsImage from './icons/bars-solid.svg';
import magnifyingGlassImage from './icons/search-solid.svg';
import dropDownImage from './icons/chevron-circle-down-solid.svg';

export class DOMDisplayer {
    
    displayLayout() {
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'main-container');
        document.body.appendChild(mainContainer);
        this.displayNavbar();
        this.displaySidePanel();
        this.displayProjectTitle('Today');
        this.displayProjectContainer('Today');
        this.displayCreateTodo();
    }

    displayNavbar() {
        const mainContainer = document.getElementById('main-container');
        const navBarContainer = document.createElement('div');
        navBarContainer.setAttribute('id', 'nav-bar-container');

        const bars = new Image();
        bars.src = barsImage;

        const magnifyingGlass = new Image();
        magnifyingGlass.src = magnifyingGlassImage;

        const searchBar = document.createElement('input');
        searchBar.setAttribute('type', 'text');
        searchBar.setAttribute('placeholder', 'search');

        const siteName = document.createElement('h1');
        siteName.textContent = `Let's Todo This`;

        navBarContainer.append(bars, magnifyingGlass, searchBar, siteName);
        mainContainer.appendChild(navBarContainer);
    }

    displaySidePanel() {
        const mainContainer = document.getElementById('main-container');
        const sidePanelContainer = document.createElement('div');
        sidePanelContainer.setAttribute('id', 'side-panel-container');

        const projectsContainer = document.createElement('div');
        projectsContainer.setAttribute('id', 'projects-container');

        const createProjectButton = document.createElement('button');
        createProjectButton.textContent = 'Create Project';

        sidePanelContainer.append(projectsContainer, createProjectButton);
        mainContainer.appendChild(sidePanelContainer);
    }

    displayProjectTitle(title: string) {
        const projectsContainer = document.getElementById('projects-container');
        const projectTitleElement = document.createElement('p');
        projectTitleElement.textContent = title;
        projectsContainer.appendChild(projectTitleElement);
    }

    displayTodo(title: string, dueDate: string, priority: string) {
        const projectTodoContainer = document.getElementById('project-todos-container');
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = dueDate;

        const dropDownElement = new Image();
        dropDownElement.src = dropDownImage;

        todoContainer.append(titleElement, dueDateElement, dropDownElement);
        this.displayPriority(todoContainer, priority);
        projectTodoContainer.appendChild(todoContainer);
    }

    displayPriority(todoContainer: HTMLDivElement, priority: string) {
        let backgroundcolor = 'black';
        if (priority === 'low') {
            backgroundcolor = 'green';
        } else if (priority === 'medium') {
            backgroundcolor = 'yellow';
        } else if (priority === 'high') {
            backgroundcolor = 'red';
        }
        todoContainer.style.backgroundColor = backgroundcolor;
    }

    displayProjectContainer(projectTitle: string) {
        const mainContainer = document.getElementById('main-container');

        const projectContainer = document.createElement('div');
        projectContainer.setAttribute('id', 'project-container');

        const projectTitleElement = document.createElement('h1');
        projectTitleElement.textContent = projectTitle;

        const projectTodosContainer = document.createElement('div');
        projectTodosContainer.setAttribute('id', 'project-todos-container');

        projectContainer.append(projectTitleElement, projectTodosContainer);
        mainContainer.append(projectContainer);
    }

    removeProjectContainer() {
        const mainContainer = document.getElementById('main-container');
        const projectContainer = document.getElementById('project-container');
        mainContainer.removeChild(projectContainer);
    }

    removeTodo(todoIndex: number) {
        const projectContainer = document.getElementById('project-container');
        const todoContainers = document.querySelectorAll('todo-container');
        projectContainer.removeChild(todoContainers[todoIndex]);
    }

    displayCreateTodo() {
        const projectTodoContainer = document.getElementById('project-todos-container');
        const createTodoContainer = document.createElement('div');
        createTodoContainer.setAttribute('id', 'create-todo-container');
        
        const createTodoText = document.createElement('h2');
        createTodoText.textContent = '+ Create Todo';

        createTodoContainer.appendChild(createTodoText);
        projectTodoContainer.appendChild(createTodoContainer);
    }

}