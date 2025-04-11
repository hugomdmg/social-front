import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  logged: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedIn$.subscribe((status) => {
      this.logged = status;
    });
  }

  logout() {
    this.authService.logout();
  }
}
