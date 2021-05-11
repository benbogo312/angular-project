import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbFbService {
  customers_ar:any[] = [];


  constructor(private afs:AngularFireDatabase) {
    // מפעילים בהתחלה ככה שהסרבס יודע להאזין 
    // לשינויים במסד נתונים בלייב פעם אחת
    this.getCustomers();
  }


  getCustomersArrayData():any{
    return this.customers_ar;
  }

  addCustomer(_body:any):void {
    // יוסיף דוקמנט חדש בקולקשיין/מאפיין קסטומייר
    this.afs.list("customers").push(_body);
  }

  
  delCustomer(_id:any):void{
      this.afs.list("customers/"+_id).remove();
  }

  editCustomer(_id:any,_body:any):void {
     this.afs.object("customers/"+_id).update(_body);
  }

  getObserCustomers():any {
    // return observable we can listen with subscribe
    return this.afs.list("customers").snapshotChanges();
  }

  getCustomers():void {
    this.getObserCustomers().subscribe((res:any) => {
      this.customers_ar.splice(0,this.customers_ar.length);
      res.map((item:any) => {
        let newItem = item.payload.val();
        newItem.id = item.payload.key;
        this.customers_ar.push(newItem)
      })
      console.log(this.customers_ar);
    })
  }
}
