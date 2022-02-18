import { Component, OnInit } from "@angular/core";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Employee } from "../../model/employee";

@Component({
  selector: "app-employee-del",
  templateUrl: "./employee-del.component.html",
  styleUrls: ["./employee-del.component.scss"],
})
export class EmployeeDelComponent implements OnInit {
  employee: any;

  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.employee = this.modalService.config.initialState;
  }

  delEmp() {
    let employees: Employee[] = this.storageService.get("employees");

    employees = employees.filter((ele) => {
      return ele.id != this.employee.id;
    });

    this.storageService.set("employees", employees);

    this.modalRef.hide();

    window.location.reload();
  }
}
