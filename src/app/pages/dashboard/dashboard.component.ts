import { Component } from "@angular/core";
import { Chat } from "src/app/models/models";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

    receivedData: Chat | undefined

    getData(friend:any){
        this.receivedData = friend
    }
}