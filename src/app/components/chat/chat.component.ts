import { Component, OnChanges, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Input } from "@angular/core";
import { MessageService } from "src/app/services/MessageService";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnChanges, OnInit {

    user = localStorage.getItem("social-id") || ""

    @Input() receivedData: any

    chatData = []

    messages = [
        {
            user1: "user2",
            user2: this.user,
            message: "hello"
        }
    ]

    chat = new FormGroup({
        message: new FormControl("")
    })

    constructor(private messageService: MessageService){}

    ngOnInit(): void {
        
    }

    ngOnChanges(){
        this.messageService.getMessagesByChatId(this.receivedData.id).subscribe(data => {
        })
    }

    sendMessage(){
        if(this.chat.value.message){
            this.messages.push({
                user1: "user1",
                user2: this.user,
                message: this.chat.value.message
            })
            this.chat.reset()
        }
    }
}