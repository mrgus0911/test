import { Component, OnInit } from "@angular/core";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Department } from "../../model/department";
import { Employee } from "../../model/employee";

@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.scss"],
})
export class EmployeeAddComponent implements OnInit {
  departments: Department[];
  employee: Employee = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    salary: 0,
    avatar: "",
    bio: "",
    departmentId: 0,
  };

  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.departments = this.storageService.get("departments");
  }

  addEmp() {
    let employees: Employee[] = this.storageService.get("employees");

    if (employees && employees.length) {
      this.employee.id = employees[employees.length - 1].id + 1;
    } else {
      employees = [];
    }

    employees.push(this.employee);

    this.storageService.set("employees", employees);

    this.modalRef.hide();

    window.location.reload();
  }
}
