import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  user:any = {}
  constructor(private afs:AngularFireDatabase, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfoObser():any {
    let id = this.route.snapshot.paramMap.get('id');
    return this.afs.list("customers/"+id).snapshotChanges();
  }

  getUserInfo():void {
    this.getUserInfoObser().subscribe((ref:any) => {
      console.log(ref);
      // מכיוון שאנחנו אוספים אובייקט מהפיירבייס
      // הפיירבייס מחזיר אובייקט כמערך 
      // שבכל תא במארך הוא מכיל מאפיין אחר
      //  ולכן אנחנו עושים לולאה שעושה 2 דברים
      // אוספת את הקיי מאותו תא ובנוסף את התוכן שלו
      // עם PAYLOAD.VAL
      ref.map((item:any) => {
        // item.key -> מכיל את שם הקיי/מאפיין
        //  item.payload.val() -> מכיל את הערך
        this.user[item.key] = item.payload.val();
        // console.log(item.payload.val())
      })
      console.log(this.user)
    })
  }

}
