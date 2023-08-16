export class TodoItem {
    title: string;
    description: string;
    dueDate: string;
    priority: "low" | "medium" | "high" | "none";
    notes: Array<string>;

    constructor(title: string, description: string, dueDate: string, priority: "low" | "medium" | "high" | "none", notes: Array<string>) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}