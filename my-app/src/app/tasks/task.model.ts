import { employee } from '../employees/employee.model';

export class task
{
    static id_genrated:number = 0;
    
    public id:number;
    public department_id:number;
    public name: string;
    public employees:number[];
    public due_date: Date;

    public done_status: boolean;


    constructor(department_id:number, name: string,employees:number[], due_date: Date)
    {
        this.id = task.id_genrated;
        this.department_id = department_id;
        this.name = name;
        this.employees=employees;
        this.due_date = due_date;

        Math.random()>0.5 ? this.done_status = false : this.done_status = true;

        task.id_genrated = task.id_genrated+1;
    }
}