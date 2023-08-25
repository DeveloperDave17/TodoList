import barsImage from './icons/bars-solid.svg';
import magnifyingGlassImage from './icons/search-solid.svg';
import dropDownImage from './icons/chevron-circle-down-solid.svg';
import trashCanImage from './icons/trash-can-outline.svg';
import './style.css';
import { TodoItem } from './todoItem';
import { Project } from './project';

export class DOMDisplayer {
    
    displayLayout() {
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'main-container');
        document.body.appendChild(mainContainer);
        this.displayNavbar();
        this.displaySidePanel();
        this.displayProjectTitle('Today');
    }

    displayProject(project: Project) {
        this.displayProjectContainer(project.title);
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

        const projectsContainerTitle = document.createElement('h2');
        projectsContainerTitle.textContent = 'Projects';

        const projectsContainer = document.createElement('div');
        projectsContainer.setAttribute('id', 'projects-container');

        const createProjectButton = document.createElement('button');
        createProjectButton.textContent = 'Create Project';

        sidePanelContainer.append(projectsContainerTitle, projectsContainer, createProjectButton);
        mainContainer.appendChild(sidePanelContainer);
    }

    displayProjectTitle(title: string) {
        const projectsContainer = document.getElementById('projects-container');
        const projectTitleElement = document.createElement('p');
        projectTitleElement.textContent = title;
        projectsContainer.appendChild(projectTitleElement);
    }

    displayTodo(elementAfter: Element, todo: TodoItem, removeTodo: () => void) {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        todoContainer.classList.add('collapsed');

        const titleElement = document.createElement('h2');
        titleElement.textContent = todo.title;

        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = todo.dueDate;

        const dropDownElement = new Image();
        dropDownElement.src = dropDownImage;

        todoContainer.append(titleElement, dueDateElement, dropDownElement);
        this.displayPriority(todoContainer, todo.priority);

        const projectTodoContainer = document.getElementById('project-todos-container');
        projectTodoContainer.insertBefore(todoContainer, elementAfter);
        todoContainer.addEventListener('click', () => {
            this.displayExpandedTodo(todo, todoContainer, removeTodo);
        })
    }

    displayTodoBeforeCreateDiv(todo: TodoItem, removeTodo: () => void) {
        const createElement = document.getElementById('create-todo-container');
        this.displayTodo(createElement, todo, removeTodo);
    }

    removeTodoElement(todoElement: Element) {
        document.getElementById('project-todos-container').removeChild(todoElement);
    }

    removeTodoAtIndex(todoIndex: number) {
        const projectTodos = document.querySelectorAll('.todo-container');
        const todoElement = projectTodos[todoIndex];
        if (todoElement !== null) {
            this.removeTodoElement(todoElement);
        }
    }

    addEventListenerToTodo(todoElement: Element, expandTodo: () => void) {
        todoElement.addEventListener('click', expandTodo);
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

    displayCreateTodo() {
        const projectTodoContainer = document.getElementById('project-todos-container');
        const createTodoContainer = document.createElement('div');
        createTodoContainer.setAttribute('id', 'create-todo-container');
        
        const createTodoText = document.createElement('h2');
        createTodoText.textContent = '+ Create Todo';

        createTodoContainer.appendChild(createTodoText);
        projectTodoContainer.appendChild(createTodoContainer);
    }

    displayExpandedTodo(todo: TodoItem, todoElement: HTMLDivElement, removeTodo: () => void) {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        todoContainer.classList.add('expanded');

        const trashCanElement = new Image();
        trashCanElement.src = trashCanImage;

        const titleElement = document.createElement('h2');
        titleElement.textContent = todo.title;
        titleElement.setAttribute('contenteditable', 'true');

        const descriptionElement = document.createElement('input');
        descriptionElement.type = 'text';
        descriptionElement.value = todo.description;

        const notesHeader = document.createElement('h3');
        notesHeader.textContent = 'Notes';

        const notesElement = document.createElement('input');
        notesElement.type = 'text';
        notesElement.value = todo.notes;

        const priorityContainer = document.createElement('div');

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';
        priorityLabel.setAttribute('for', 'priority');
        const prioritySelection = document.createElement('select');
        prioritySelection.setAttribute('name', 'priority');
        prioritySelection.setAttribute('id', 'priority');

        const lowPriorityOption = document.createElement('option');
        lowPriorityOption.setAttribute('value', 'low');
        lowPriorityOption.textContent = 'low';
        if (todo.priority === 'low') { lowPriorityOption.selected = true; }

        const medPriorityOption = document.createElement('option');
        medPriorityOption.setAttribute('value', 'medium');
        medPriorityOption.textContent = 'medium';
        if (todo.priority === 'medium') { medPriorityOption.selected = true; }

        const highPriorityOption = document.createElement('option');
        highPriorityOption.setAttribute('value', 'high');
        highPriorityOption.textContent = 'high';
        if (todo.priority === 'high') { highPriorityOption.selected = true; }

        const noPriorityOption = document.createElement('option');
        noPriorityOption.setAttribute('value', 'none');
        noPriorityOption.textContent = 'none';
        if (todo.priority === 'none') { noPriorityOption.selected = true; }

        prioritySelection.append(noPriorityOption, lowPriorityOption, medPriorityOption, highPriorityOption);
        priorityContainer.append(priorityLabel, prioritySelection);

        const dueDateElement = document.createElement('input');
        dueDateElement.type = 'date';
        dueDateElement.value = todo.dueDate;

        const dropDownElement = new Image();
        dropDownElement.src = dropDownImage;

        todoContainer.append(trashCanElement, titleElement, descriptionElement, notesHeader, notesElement, dueDateElement, priorityContainer, dropDownElement);
        this.displayPriority(todoContainer, todo.priority);

        const projectTodoContainer = document.getElementById('project-todos-container');
        projectTodoContainer.insertBefore(todoContainer, todoElement);
        projectTodoContainer.removeChild(todoElement);
        this.addEventListenersToExpandedTodo(todo, todoContainer, removeTodo);
    }

    addEventListenersToExpandedTodo(todo: TodoItem, todoContainer: Element, removeTodo: () => void) {
        const titleElement = todoContainer.querySelector('h2');
        titleElement.addEventListener('input', () => { todo.title = titleElement.textContent });

        const inputElements = todoContainer.querySelectorAll('input');
        const descriptionElement = inputElements[0];
        descriptionElement.addEventListener('input', () => { todo.description = descriptionElement.value });

        const notesElement = inputElements[1];
        notesElement.addEventListener('input', () => { todo.notes = notesElement.value });

        const dueDateElement = inputElements[2];
        dueDateElement.addEventListener('input', () => { todo.dueDate = dueDateElement.value });

        const priorityElement = todoContainer.querySelector('select');
        priorityElement.addEventListener('change', () => { todo.priority = priorityElement.value });

        const images = todoContainer.querySelectorAll('img');

        const removeElement = images[0];
        removeElement.addEventListener('click', removeTodo);
        removeElement.addEventListener('click', () => this.removeTodoElement(todoContainer));

        const collapseElement = images[1];
        collapseElement.addEventListener('click', () => { 
            this.displayTodo(todoContainer, todo, removeTodo);
            this.removeTodoElement(todoContainer);
        });
    }

    addEventListenerToCreateTodo(createTodo: () => void) {
        const createTodoElement = document.getElementById('create-todo-container');
        createTodoElement.addEventListener('click', () => {
            createTodo();
        });
    }

    

}