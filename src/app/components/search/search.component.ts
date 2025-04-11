import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "src/app/services/UserService";
import { User, Chat } from "src/app/models/models";
import { ChatService } from "src/app/services/ChatService";
import { Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit, OnDestroy{

    filteredUsers: any[] = []
    users: User[] = []
    @Output() eventEmitter = new EventEmitter()
    private subscription!: Subscription


    constructor(private userService: UserService, private chatService: ChatService){}

    ngOnInit(){
        this.userService.getAll().subscribe(data => {
            this.users = data
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
    }

    doFilter(event:Event){
        this.filteredUsers = []
        const filter = (event.target as HTMLInputElement).value
        this.users.forEach(user => {
            if(user.name?.toLowerCase().includes(filter) && filter != ""){
                this.filteredUsers.push(user)
            }
        })
    }

    connect(id:any, name:string){
        const chat: Chat = {
            user1_id: localStorage.getItem("social-id") || "0",
            user2_id: id,
            user1_name: name,
            user2_name: localStorage.getItem("social-name") || ""
        }
        this.subscription = this.chatService.createChat(chat).subscribe(data => {
            console.log(data)
            this.eventEmitter.emit(data)
        })
    }

}