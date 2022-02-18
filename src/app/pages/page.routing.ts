import { Routes } from "@angular/router";

import { DepartmentComponent } from "./department/department.component";
import { EmployeeComponent } from "./employee/employee.component";

export const PageRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "department",
        component: DepartmentComponent,
      },
      {
        path: "employee",
        component: EmployeeComponent,
      },
    ],
  },
];
