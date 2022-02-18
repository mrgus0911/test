import { Component, OnInit } from "@angular/core";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Department } from "../../model/department";
import { Employee } from "../../model/employee";

@Component({
  selector: "app-department-del",
  templateUrl: "./department-del.component.html",
  styleUrls: ["./department-del.component.scss"],
})
export class DepartmentDelComponent implements OnInit {
  department: any;

  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.department = this.modalService.config.initialState;
  }

  delDep() {
    let departments: Department[] = this.storageService.get("departments");
    let employees: Employee[] = this.storageService.get("employees");

    departments = departments.filter((ele) => {
      return ele.id != this.department.id;
    });

    employees = employees.filter((ele) => {
      return ele.departmentId != this.department.id;
    });

    this.storageService.set("departments", departments);
    this.storageService.set("employees", employees);

    this.modalRef.hide();

    window.location.reload();
  }
}
