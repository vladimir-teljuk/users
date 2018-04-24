import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './services/get-users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

    public usersList: object[];

    public constructor(private getUsersService: GetUsersService) {

    }

    public ngOnInit(): void {
        this.getUsersService.getUsers(15).subscribe(data => {
            this.usersList = data.results;
            console.log(data);
        });
    }
}
