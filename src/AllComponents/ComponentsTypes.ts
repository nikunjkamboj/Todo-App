export interface EditTodoProps 
{
    updateTask: (text: string, date: string, id: number) => void;
    item: 
    {
        id: number;
        text: string;
        date: string;
        completed: boolean;
    };
}

export interface TodoItemProps 
{
    item: 
    {
        id: number;
        text: string;
        date: string;
        completed: boolean;
        isEditing?: boolean;
    };
    deleteTask: (id: number) => void;
    toggleCompleted: (id: number) => void;
    updateTask: (id: number, newText: string, newDate: string) => void;
}