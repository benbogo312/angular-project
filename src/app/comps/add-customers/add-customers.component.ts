import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DbFbService } from '../../services/db-fb.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  @ViewChild("f") myForm:any;
  constructor(private dbFb:DbFbService, private router:Router) { }

  ngOnInit(): void {
  }

  onSub():any {
    if(this.myForm.form.status == "VALID"){
      let bodyForm = this.myForm.form.value 
      console.log(bodyForm)
      // מוסיף מאפיין של האיי די של המשתמש
      bodyForm.user_id = localStorage["fb_user"];
      this.dbFb.addCustomer(bodyForm);
      alert("success")
      this.router.navigate(["/admin"])
    }
  }


}
