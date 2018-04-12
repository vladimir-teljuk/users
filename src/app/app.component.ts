import {Component, OnInit} from '@angular/core';
import {GetUsersService} from './services/get-users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

    public usersList: object[];

    constructor(private getUsersService: GetUsersService) {

    }

    ngOnInit() {
        this.getUsersService.getUsers(15).then(resp => {
            this.usersList = resp.data.results;
        });
    }
}
