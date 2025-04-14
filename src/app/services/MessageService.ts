import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../models/models";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: "root"
})
export class MessageService {

    private apiUrl = environment.apiUrl + "message/"

    constructor(private http: HttpClient) { }

    getMessagesByChatId(id: number): Observable<any> {
        return this.http.post(this.apiUrl + "messages-chat-id", { id: id })
    }

    saveMessage(message: Message): Observable<any> {
        return this.http.post(this.apiUrl + "send-message", message)
    }
}