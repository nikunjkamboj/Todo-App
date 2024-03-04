
export interface Task 
{
    id: number;
    text: string;
    date: string;
    completed: boolean;
    isEditing?: boolean;
}

export interface TodoContextProps 
{
    tasks: Task[];
    addTask: (text: string, date: string) => void;
    deleteTask: (id: number) => void;
    toggleCompleted: (id: number) => void;
    updateTask: (id: number, newText: string, newDate: string) => void;
}
