import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable()
export class GetUsersService {

    constructor() {

    }

    public getUsers( count: number) {
        return axios.get('https://randomuser.me/api/?results=' + count.toString());

    }

}
