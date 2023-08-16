export class TodoItem {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    notes: string;

    constructor(title: string, description: string, dueDate: string, priority: string, notes: string) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}