import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";
import { FormsModule } from "@angular/forms";

import { DepartmentComponent } from "./department/department.component";
import { DepartmentAddComponent } from "./department-add/department-add.component";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";
import { DepartmentDelComponent } from "./department-del/department-del.component";

import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { EmployeeDelComponent } from "./employee-del/employee-del.component";

import { RouterModule } from "@angular/router";
import { PageRoutes } from "./page.routing";

@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentDelComponent,

    EmployeeComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
    FormsModule,
  ],
})
export class PageModule {}
