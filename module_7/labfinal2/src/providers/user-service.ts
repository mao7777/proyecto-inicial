import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {  

  private usersURI = 'http://138.68.0.83:7070/api/v1/user/';
    private headers:Headers;//({'Content-Type': 'application/json'});

    constructor(private http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getUsers(): Observable<User[]> {
        const url = this.usersURI + 'list';
        return this.http.get(url)
            .map(response => <User[]>response.json())
            .catch(this.handleError);
    }

    getUser(email:string): Observable<User> {
        const url = this.usersURI + 'profile/' + email;
        return this.http.get(url)
           // .map(response => {response; console.log("Esta es la respuesta: " + response)})
            .map(response => <User>response.json())
            .catch(this.handleError);
    }

    singUpUser(email:string, password:string): Observable<User> {
        const url = this.usersURI + 'sign-in';
        return this.http
        .post(url, JSON.stringify({email:email,
            password:password}), {headers: this.headers})
            .map(res => <User>res.json())
            .catch(this.handleError);
    }

    update(user: User): Observable<User> {
        const url = this.usersURI + 'update/' + user.email;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .map(() => user)
            .catch(this.handleError);
    }

    create(user: User): Observable<User> {
        const url = this.usersURI + 'sign-up';
        return this.http
            .post(url, JSON.stringify({email: user.email,
            		password: user.password,
            		firstname: user.firstname,
            		lastname: user.lastname,
            		phone: user.phone}), {headers: this.headers})
            .map(res => <User>res.json())
            .catch(this.handleError);
    }

    delete (user: User): Observable<any>{
        const url = this.usersURI + 'delete/' + user.email;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    forgotPassword(password: string, email: string): Observable<User>{
        const url = this.usersURI + 'forgot-password/' + email;
        return this.http
            .post(url, JSON.stringify({password:password}), {headers: this.headers})
            .map(res => <User>res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }

}
