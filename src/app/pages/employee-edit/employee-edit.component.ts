import { Component, OnInit } from "@angular/core";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Department } from "../../model/department";
import { Employee } from "../../model/employee";

@Component({
  selector: "app-employee-edit",
  templateUrl: "./employee-edit.component.html",
  styleUrls: ["./employee-edit.component.scss"],
})
export class EmployeeEditComponent implements OnInit {
  departments: Department[];
  employee: any;

  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.departments = this.storageService.get("departments");
    this.employee = this.modalService.config.initialState;
  }

  ediEmp() {
    let employees: Employee[] = this.storageService.get("employees");

    employees = employees.map((ele) => {
      if (ele.id == this.employee.id) ele = this.employee;
      return ele;
    });

    this.storageService.set("employees", employees);

    this.modalRef.hide();

    window.location.reload();
  }
}
