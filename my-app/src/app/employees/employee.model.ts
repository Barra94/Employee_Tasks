import { task } from "../tasks/task.model";

export class employee
{
    static id_genrated:number = 0;
    public id:number;
    public department_id: number;
    public first_name: string;
    public last_name: string;
    public birth_date: number;
    public tasks:task[];

    constructor(department_id: number , first_name: string , last_name: string , birth_date: number)
    {
        this.id = employee.id_genrated;
        this.department_id = department_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;

        employee.id_genrated = employee.id_genrated+1;
    }
}