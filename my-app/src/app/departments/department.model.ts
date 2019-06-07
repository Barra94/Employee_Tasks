import { employee } from "../employees/employee.model";
import { EmployeesService } from "../employees.service";

export class department
{
    static id_genrated:number = 0;
    public id:number;
    public name: string;
    public building: string;
    public employees:employee[];

    constructor(name: string, building: string)
    {
        this.id = department.id_genrated;
        this.name = name;
        this.building = building;
        
        //this.employees = employeeServies.getEmployeeByDepartment(this.id);
        
        department.id_genrated = department.id_genrated+1;
    }

    employeesChange()
    {
        //return this.employeeService.getEmployeeByDepartment(this.id);
    }
}