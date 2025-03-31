import { Component, OnChanges, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Input } from "@angular/core";
import { MessageService } from "src/app/services/MessageService";
import { Message } from "src/app/models/models";
import { Chat } from "src/app/models/models";
@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnChanges, OnInit {

    @Input() receivedData: Chat | undefined

    user = parseInt(localStorage.getItem("social-id") || "0")
    chatData = []
    messages: Message[] = []

    chat = new FormGroup({
        message: new FormControl("")
    })

    constructor(private messageService: MessageService){}

    ngOnInit(){

    }

    ngOnChanges(){
        setInterval(()=>{
            if(this.receivedData?.id){
                this.messageService.getMessagesByChatId(this.receivedData.id).subscribe(data => {
                    this.messages = data
                })
            }
        }, 500)
    }

    sendMessage(){
        if(this.chat.value.message && this.receivedData?.id){
            const message: Message = {
                chat_id: this.receivedData.id,
                sender_id: this.user,
                text: this.chat.value.message
            }
            this.messageService.saveMessage(message).subscribe(data => {
            })
            this.chat.reset()
        }
    }
}