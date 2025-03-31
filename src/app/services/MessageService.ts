import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MessageService {

    private apiUrl = "http://localhost:8080/message/"

    constructor(private http: HttpClient) { }

    getMessagesByChatId(id: number): Observable<any> {
        return this.http.post(this.apiUrl + "messages-chat-id", { id: id })
    }
}