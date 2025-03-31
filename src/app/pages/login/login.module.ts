import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LogupComponent } from "../logup/logup.component";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [LoginComponent, LogupComponent],
    exports: [LoginComponent, LogupComponent]
})
export class LoginModule {


}