import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthLayoutRoutes } from "./auth-layout.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(AuthLayoutRoutes), FormsModule],
  declarations: [],
})
export class AuthLayoutModule {}
