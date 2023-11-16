export interface Task {
    id: number;
    title: String;
    completed: boolean;
    editing?: boolean;
}