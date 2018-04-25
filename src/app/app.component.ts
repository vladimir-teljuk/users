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
    public columnNames: string[] = [ 'Name', 'Gender', 'Phone', 'Email', 'Username', 'Registered', 'City'];
    public isTrueSort: string[] = ['', '', '', '', '', '', ''];


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

    public sortColumn(columnName) {
        const userList = this.usersList;
        const isTrueSort = this.isTrueSort;
        const columnNames = this.columnNames;

        function directSort(list, column) {
            list.sort((a, b) => {
                if (a[column] > b[column]) {
                    return 1;
                }
                if (a[column] < b[column]) {
                    return -1;
                }
            });
            return '↑';
        }

        function reverseSort(list, column) {
            list.sort((a, b) => {
                if (a[column] > b[column]) {
                    return -1;
                }
                if (a[column] < b[column]) {
                    return 1;
                }
            });
            return '↓';
        }

        function sort() {
            let markerSort = '';
            if (userList[0][columnName] > userList[userList.length - 1][columnName]) {
                markerSort = directSort(userList, columnName);
            } else {
                markerSort = reverseSort(userList, columnName);
            }
            console.log(markerSort);
            for (let i = 0; i < isTrueSort.length; i++) {
                isTrueSort[i] = '';
                if (columnNames[i].toLowerCase() === columnName) {
                    isTrueSort[i] = markerSort;
                }
            }
        }
        sort();
    }
}
