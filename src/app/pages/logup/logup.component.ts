import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/UserService";

@Component({
    selector: "app-logup",
    templateUrl: "./logup.component.html",
    styleUrls: ["./logup.component.css"]
})
export class LogupComponent {
    login = new FormGroup({
        name: new FormControl("user_" + parseInt((Math.random() * 9000).toString()), Validators.required),
        email: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        password2: new FormControl("", Validators.required)
    })

    alert = ""

    constructor(private router: Router, private userService: UserService) { }

    doLogup() {
        const credential = {
            email: this.login.value.email || "",
            password: this.login.value.password || "",
            name: this.login.value.name || ""
        }
        this.userService.create(credential).subscribe(data => {
            if (data.id) {
                this.router.navigateByUrl('/login')
            } else {
                this.alert = ""
                setTimeout(() => {
                    this.alert = ""
                }, 2000)
            }
        })
    }
}