import { Component } from "@angular/core";
import { UserService } from "src/app/services/UserService";
import {OnInit} from "@angular/core"
import { User } from "src/app/models/models";
import { ChatService } from "src/app/services/ChatService";
import { Chat } from "src/app/models/models";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit{

    filteredUsers: any[] = []
    users: User[] = []


    constructor(private userService: UserService, private chatService: ChatService){}

    ngOnInit(){
        this.userService.getAll().subscribe(data => {
            this.users = data
        })

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
        this.chatService.createChat(chat).subscribe(data => {
        })

    }











    // users = [
    //     { name: "Juan Pérez", email: "juan.perez@example.com" },
    //     { name: "María López", email: "maria.lopez@example.com" },
    //     { name: "Carlos Gómez", email: "carlos.gomez@example.com" },
    //     { name: "Ana Torres", email: "ana.torres@example.com" },
    //     { name: "Luis Fernández", email: "luis.fernandez@example.com" },
    //     { name: "Sofía Ramírez", email: "sofia.ramirez@example.com" },
    //     { name: "Miguel Sánchez", email: "miguel.sanchez@example.com" },
    //     { name: "Lucía Díaz", email: "lucia.diaz@example.com" },
    //     { name: "David Castillo", email: "david.castillo@example.com" },
    //     { name: "Elena Morales", email: "elena.morales@example.com" },
    //     { name: "Pablo Ríos", email: "pablo.rios@example.com" },
    //     { name: "Natalia Herrera", email: "natalia.herrera@example.com" },
    //     { name: "Ricardo Méndez", email: "ricardo.mendez@example.com" },
    //     { name: "Patricia Vega", email: "patricia.vega@example.com" },
    //     { name: "Javier Navarro", email: "javier.navarro@example.com" },
    //     { name: "Carmen Ortega", email: "carmen.ortega@example.com" },
    //     { name: "Alberto Reyes", email: "alberto.reyes@example.com" },
    //     { name: "Teresa Soto", email: "teresa.soto@example.com" },
    //     { name: "Andrés Molina", email: "andres.molina@example.com" },
    //     { name: "Beatriz Guzmán", email: "beatriz.guzman@example.com" },
    //     { name: "Francisco León", email: "francisco.leon@example.com" },
    //     { name: "Marta Fuentes", email: "marta.fuentes@example.com" },
    //     { name: "Emilio Herrera", email: "emilio.herrera@example.com" },
    //     { name: "Gabriela Soto", email: "gabriela.soto@example.com" },
    //     { name: "Roberto Jiménez", email: "roberto.jimenez@example.com" },
    //     { name: "Verónica Paredes", email: "veronica.paredes@example.com" },
    //     { name: "Sergio Núñez", email: "sergio.nunez@example.com" },
    //     { name: "Isabel Rojas", email: "isabel.rojas@example.com" },
    //     { name: "Tomás Espinoza", email: "tomas.espinoza@example.com" },
    //     { name: "Fernanda Castro", email: "fernanda.castro@example.com" }
    // ];

}