import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/UserService";


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
        login = new FormGroup({
            email: new FormControl(""),
            password: new FormControl("")
        })

        alert = ""

        constructor(private router: Router, private userService: UserService){}

        doLogin(){
            const credential = {
                email: this.login.value.email || "",
                password: this.login.value.password || ""
            }
            this.userService.login(credential).subscribe(data => {
                if(data.id){
                    localStorage.setItem('social-id', data.id)
                    localStorage.setItem('social-name', data.name)
                    this.router.navigateByUrl('/dashboard')
                }else{
                    this.alert = "wrong email or password"
                    setTimeout(()=>{
                        this.alert = ""
                    }, 2000)
                }
            })
        }
    
}