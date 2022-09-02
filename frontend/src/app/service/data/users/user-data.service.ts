import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Users {
  constructor(public firstName: string, public lastName: string, public email: string, public loginId: string, public password: string, public contactNumber: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  //url = "http://localhost:5000";
  url = "http://tweetservice-env.eba-fuas7s2w.ap-south-1.elasticbeanstalk.com";

  register(user: Users) {
    console.log(user)
    return this.http.post(this.url + "/tweets/register", user)
  }

  getUsers() {
    return this.http.get<Users[]>(this.url + "/tweets/users/all")
  }

  getUser(loginId: String) {
    return this.http.get<Users>(this.url + `/tweets/user/${loginId}`)
  }

  updatePassword(loginId: String, user: Users) {
    return this.http.put(this.url + `/tweets/${loginId}/forgot`, user);
  }

  searchByRegex(str: string) {
    return this.http.get<Users[]>(this.url + `/tweets/user/search/${str}`)
  }
  authenticateUser(loginId: string, password: string) {
    return this.http.get(this.url + `/authenticate/${loginId}/${password}`)
  }
}
