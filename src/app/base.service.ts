import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private loggedUser:any=null

  constructor(
    private http:HttpClient,
    private auth:AngularFireAuth) {
      this.auth.authState.subscribe(
        (user) => {
        if (user) {
          user.getIdToken().then(
            (token) => this.loggedUser.token=token
          )
        }
        else {this.loggedUser=null}

      })
     }

    signIn(){
      this.auth.signInWithPopup(new GoogleAuthProvider())
    }
    signOut(){
      this.auth.signOut()
    }
    getTulaj(){
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loggedUser?.token||null}`)
      return this.http.get("https://localhost:7175/api/Tulajdonos", {headers})
    }
}
