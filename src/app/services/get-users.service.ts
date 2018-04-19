import { Injectable } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Injectable()
export class GetUsersService {
    public constructor() {

    }

    public getUsers(count: number): AxiosPromise {
        return axios.get(`https://randomuser.me/api/?results=${count}`);
    }

}
