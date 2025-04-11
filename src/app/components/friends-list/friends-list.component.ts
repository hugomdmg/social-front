import { ChatService } from "src/app/services/ChatService";
import { Chat, User } from "src/app/models/models";
import { Output, EventEmitter, Input, Component, OnChanges } from "@angular/core";

@Component({
    selector: "app-friends-list",
    templateUrl: "./friends-list.component.html",
    styleUrls: ["./friends-list.component.css"]
})
export class FriendsListComponent implements OnChanges {
    friends: Chat[] = []

    @Output() eventEmitter = new EventEmitter()
    @Input() receivedConnection: User | undefined


    constructor(private chatService: ChatService) { }

    async ngOnChanges() {
        this.friends = []
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

    sendData(friend: Chat) {
        this.eventEmitter.emit(friend)
    }

}