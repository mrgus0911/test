import { Component, OnInit } from "@angular/core";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LocalStorageService } from "ngx-localstorage";

import { Department } from "../../model/department";

@Component({
  selector: "app-department-add",
  templateUrl: "./department-add.component.html",
  styleUrls: ["./department-add.component.scss"],
})
export class DepartmentAddComponent implements OnInit {
  department: Department = {
    id: 0,
    name: "",
    description: "",
  };

  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  addDep() {
    let departments: Department[] = this.storageService.get("departments");

    if (departments && departments.length) {
      this.department.id = departments[departments.length - 1].id + 1;
    } else {
      departments = [];
    }

    departments.push(this.department);

    this.storageService.set("departments", departments);

    this.modalRef.hide();

    window.location.reload();
  }
}
