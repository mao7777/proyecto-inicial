import {Injectable} from "@angular/core";
import {USERS} from "../mock/user-mock";
import {User} from "../model/user";

@Injectable()
export class UserService{
    getUsers(): Promise<User[]>{
        return Promise.resolve(USERS);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }
}