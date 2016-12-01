import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class UserService {

  db: SQLite;
  constructor() {
    this.db = new SQLite();
  }

  openDatabase(){
    return this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    });
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS user(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'name TEXT, ' +
        'phone TEXT, ' +
        'email TEXT)';
    return this.db.executeSql(sql, []);
  }

  insertPrueba(){
    let query = 'INSERT INTO user(name) VALUES("UsuarioPrueba")';
    return this.db.executeSql(query, []);
  }


  getAll(){
    let query = 'SELECT * FROM user;';
    return this.db.executeSql(query, [])
      .then(response => {
        let users = [];
        for (let index = 0; index < response.rows.length; index++) {
          users.push(response.rows.item(index));
        }
        return Promise.resolve(users);
      })
  }

  create(user: any){
    let query = 'INSERT INTO user(name) VALUES(?)';
    return this.db.executeSql(query, [user.name]);
  }

  update(user: any){
    let query = 'UPDATE user SET name=? WHERE id=?';
    return this.db.executeSql(query, [user.name, user.id]);
  }

}
