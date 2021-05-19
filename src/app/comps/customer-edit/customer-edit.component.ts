import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { DbFbService } from 'src/app/services/db-fb.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @ViewChild("f") myForm: any;
  user: any = {}

  constructor(private afs: AngularFireDatabase, private route: ActivatedRoute, private dbFb: DbFbService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  onSub() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.myForm.form);
    if (this.myForm.form.status == "VALID") {
      // console.log(this.myForm.form.value)
      let bodyForm = this.myForm.form.value;
      bodyForm.user_id = localStorage["fb_user"];
      this.dbFb.editCustomer(id, bodyForm);
      alert("Customer updated!");
    }
  }

  getUserInfoObser(): any {
    let id = this.route.snapshot.paramMap.get('id');
    return this.afs.list("customers/" + id).snapshotChanges();
  }

  getUserInfo(): void {
    this.getUserInfoObser().subscribe((ref: any) => {
      console.log(ref);
      ref.map((item: any) => {
        // item.key -> Includes the Key id
        //  item.payload.val() -> Includes the value
        this.user[item.key] = item.payload.val();
      })
      console.log(this.user)
    })
  }

}
