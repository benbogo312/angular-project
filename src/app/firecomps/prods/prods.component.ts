import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css']
})
export class ProdsComponent implements OnInit {
  prods_ar: any[] = [];
  @ViewChild("f") myForm: any;
  // afs = angular . fire . store
  constructor(private afs: AngularFireDatabase) { }

  ngOnInit(): void {
    this.getRealFoods();
  }

  addProd(): void {
    // console.log(this.myForm.form)
    if (this.myForm.form.status == "VALID") {
      // Collects the object from the new product by the input names in the form as properties
      let newProd = this.myForm.form.value;
      // Adds the new information to the Database
      this.afs.list("test_db").push(newProd);
    }
  }

  // Delete an entry using id
  delProd(_idDel: any): void {
    if (confirm("Are you sure?")) {
      this.afs.list("test_db/" + _idDel).remove();
    }
  }

  getObserProds(): any {
    // Returns all the data from the database from the collection test.db as an observeble
    // And listens to the db for new information and also updates it automaticly 
    return this.afs.list("test_db").snapshotChanges()
  }

  // Collects the information from the Firebase db in real time
  getRealFoods(): void {
    this.getObserProds().subscribe((res: any) => {
      // console.log(res);
      this.prods_ar.splice(0, this.prods_ar.length);
      res.map((item: any) => {
        // Pulles the info from the document in the array in the db collection
        let newItem = item.payload.val();
        // It's important to know the ID to be able to delete and alter the document in the future
        // The ID will be based with the Key of the entry
        newItem.id = item.payload.key;
        this.prods_ar.push(newItem);

      })
      console.log(this.prods_ar);
    })
  }

}
