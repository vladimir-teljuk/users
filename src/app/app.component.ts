import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './services/get-users.service';
import { UserInterface } from './Interfaces/UserInterface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {

    public usersList: Array<UserInterface> = [];

    public constructor(private getUsersService: GetUsersService) {

    }

    public ngOnInit(): void {
        this.getUsersService.getUsers(15).subscribe(data => {
            for (let i = 0; i < data.results.length; i++) {
                this.usersList[i] = {
                    name: data.results[i].name.first + ' ' + data.results[i].name.last,
                    gender: data.results[i].gender,
                    phone: data.results[i].phone,
                    email: data.results[i].email,
                    username: data.results[i].login.username,
                    registered: data.results[i].registered,
                    city: data.results[i].location.city
                };
            }
        });
    }
}
