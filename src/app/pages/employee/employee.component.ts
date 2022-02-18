import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Employee } from "../../model/employee";

import { EmployeeAddComponent } from "../employee-add/employee-add.component";
import { EmployeeEditComponent } from "../employee-edit/employee-edit.component";
import { EmployeeDelComponent } from "../employee-del/employee-del.component";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {
  modalRef: BsModalRef;

  employees: Employee[] = [];

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.employees = this.storageService.get("employees");
  }

  addEmp() {
    this.modalRef = this.modalService.show(EmployeeAddComponent, {
      class: "modal-dialog-centered modal-lg",
    });
  }

  editEmp(employee: Employee) {
    this.modalRef = this.modalService.show(EmployeeEditComponent, {
      class: "modal-dialog-centered modal-lg",
      initialState: employee,
    });
  }

  delEmp(employee: Employee) {
    this.modalRef = this.modalService.show(EmployeeDelComponent, {
      class: "modal-dialog-centered modal-lg",
      initialState: employee,
    });
  }
}
