import { Component, OnInit } from "@angular/core";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Department } from "../../model/department";

@Component({
  selector: "app-department-edit",
  templateUrl: "./department-edit.component.html",
  styleUrls: ["./department-edit.component.scss"],
})
export class DepartmentEditComponent implements OnInit {
  department: any;

  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.department = this.modalService.config.initialState;
  }

  editDep() {
    let departments: Department[] = this.storageService.get("departments");

    departments = departments.map((ele) => {
      if (ele.id == this.department.id) ele = this.department;
      return ele;
    });

    this.storageService.set("departments", departments);

    this.modalRef.hide();

    window.location.reload();
  }
}
