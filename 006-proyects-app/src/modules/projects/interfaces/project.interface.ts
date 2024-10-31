export interface Project {
    id: string;
    name: string;
    tasks:Task;
}

export interface Task {
    length: number;
    id: string;
    name: string;
    done: Date | null;
}