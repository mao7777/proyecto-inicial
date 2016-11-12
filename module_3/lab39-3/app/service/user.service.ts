import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

   /*private usersURI = 'http://138.68.0.83:7070/api/v1/user/list';*/
   private usersURI = 'http://localhost:3000/api/users';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(this.usersURI)
            .map(response => response.json().data as User[])
            .catch(this.handleError);
    }

    update(user: User): Observable<User> {
        const url = `${this.usersURI}/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .map(() => user)
            .catch(this.handleError);
    }

    create(name: string): Observable<User> {

        return this.http
            .post(this.usersURI, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}