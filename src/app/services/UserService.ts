import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { User } from "../models/models";


@Injectable({
    providedIn: "root"
})
export class UserService {

    private apiUrl = "http://localhost:8080/user/"

    constructor(private http: HttpClient) { }

    login(credentials: User): Observable<any> {
        return this.http.post(this.apiUrl + "login", credentials);
    }

    create(credentials: User): Observable<any> {
        return this.http.post(this.apiUrl + "save", credentials)
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl + "get-all");
    }

    getById(id:string): Observable<User> {
        const data = {id: id}
        return this.http.post<User>(this.apiUrl + "user-id", data)
    }
    
}