import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFbService {
  user: any = {}
  // afAuth -> A veriable that can make all the functions of authontication
  // Such as = Login, Logout, Register and checking if the user is connected
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async logInFb(_email: string, _pass: string) {
    let user = await this.afAuth.signInWithEmailAndPassword(_email, _pass);
    return user;
  }

  async singUpNewUser(_user: any) {
    try {
      let result = await this.afAuth.createUserWithEmailAndPassword(_user.email, _user.password)
      return result;
    }
    catch (err) {
      console.log(err);
      return err;
    }
  }

  // Logout
  async logOut() {
    await this.afAuth.signOut();
    localStorage.removeItem("fb_user")
    this.router.navigate(["/"]);
    setTimeout(() => {
      // to subscribe again to customers of new users
      window.location.reload();
    }, 400)

    // back to login
  }

  getUserData(): any {
    return this.user
  }

  // Checks if the user is connected
  checkUserAuth() {
    this.afAuth.authState.subscribe((user: any) => {
      if (!user) {
        // Doesn't recognize user
        alert("You must login first to see the admin panel");
        this.router.navigate(["/"]);
      }
      else {
        for (let key in user) {
          this.user[key] = user[key];
        }
      }
      console.log(user);
    })
  }
}


