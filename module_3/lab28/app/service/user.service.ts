import {Injectable} from "@angular/core";
import {USERS} from "../mock/user-mock";

@Injectable()
export class UserService{
    getProducts(){
        return Promise.resolve(USERS);
    }
}