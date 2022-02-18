import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Department } from "../../model/department";

import { DepartmentAddComponent } from "../department-add/department-add.component";
import { DepartmentEditComponent } from "../department-edit/department-edit.component";
import { DepartmentDelComponent } from "../department-del/department-del.component";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {
  modalRef: BsModalRef;

  departments: Department[] = [];

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.departments = this.storageService.get("departments");
  }

  addDep() {
    this.modalRef = this.modalService.show(DepartmentAddComponent, {
      class: "modal-dialog-centered modal-lg",
    });
  }

  editDep(department: Department) {
    this.modalRef = this.modalService.show(DepartmentEditComponent, {
      class: "modal-dialog-centered modal-lg",
      initialState: department,
    });
  }

  delDep(department: Department) {
    this.modalRef = this.modalService.show(DepartmentDelComponent, {
      class: "modal-dialog-centered modal-lg",
      initialState: department,
    });
  }
}
