import { Component } from "@angular/core";
import { ChatService } from "src/app/services/ChatService";
import { OnInit } from "@angular/core";
import { UserService } from "src/app/services/UserService";
import { Chat } from "src/app/models/models";
import { Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-friends-list",
    templateUrl: "./friends-list.component.html",
    styleUrls: ["./friends-list.component.css"]
})
export class FriendsListComponent implements OnInit {
    friends: Chat[] = []

    @Output() eventEmitter = new EventEmitter()

    constructor(private chatService: ChatService, private userService: UserService) { }

    async ngOnInit() {
        const id = localStorage.getItem("social-id")
        const userName = localStorage.getItem("social-name")
        if (id) {
            const response = await this.chatService.getUserChats(id)

            response.forEach((chat: Chat) => {
                if (chat.user1_name == userName) {
                    this.friends.push(chat)
                } else {
                    this.friends.push({
                        user1_name: chat.user2_name,
                        user2_name: chat.user1_name,
                        user1_id: chat.user1_id,
                        user2_id: chat.user2_id,
                        id: chat.id
                    })
                }
            })
        }

    }

    sendData(friend:any){
        this.eventEmitter.emit(friend)
    }



}