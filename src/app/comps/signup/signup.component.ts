import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFbService } from 'src/app/services/auth-fb.service';
import { DbFbService } from 'src/app/services/db-fb.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm: any
  constructor(private authFb: AuthFbService, private router: Router, private dbFire: DbFbService) { }

  ngOnInit(): void {
  }

  async onSub() {
    console.log(this.myForm.form.value);
    let user = this.myForm.form.value
    let result = await this.authFb.singUpNewUser(user);
    console.log(result);
    if (result.user) {
      alert("Sign up succeful! now login");
      this.dbFire.addUser(user);
      this.router.navigate(["/"]);
    }
    if (result.code) {
      alert(result.message);
    }
    // result.user -> success
    // result.code -> problem
    return result;
  }

}
