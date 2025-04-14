import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chat } from "../models/models";
import { Observable } from "rxjs";
import { UserService } from "./UserService";
import { firstValueFrom } from 'rxjs';
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: "root"
})
export class ChatService {

    private apiUrl = environment.apiUrl + "chat/"


    constructor(private http: HttpClient, private userService: UserService) { }

    createChat(chat: Chat): Observable<any> {
        return this.http.post(this.apiUrl + "create", chat)
    }


    async getUserChats(user_id: string): Promise<any> {
        const user = await firstValueFrom(this.userService.getById(user_id));
        return await firstValueFrom(this.http.post(this.apiUrl + "find", user))
    }


    getAllChats() { }

    getChatById() { }
}