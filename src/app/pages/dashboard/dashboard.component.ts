import { Component } from "@angular/core";
import { Chat, User } from "src/app/models/models";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

    receivedData!: Chat
    receivedConnection!: User

    getData(friend:Chat){
        this.receivedData = friend
    }

    getUserConnected(data:User){
        this.receivedConnection = data
        console.log('dashboard',data)
    }
}