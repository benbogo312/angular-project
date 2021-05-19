import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  user: any = {}
  constructor(private afs: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfoObser(): any {
    let id = this.route.snapshot.paramMap.get('id');
    return this.afs.list("customers/" + id).snapshotChanges();
  }

  getUserInfo(): void {
    this.getUserInfoObser().subscribe((ref: any) => {
      console.log(ref);
      // Because we collect an object from Firebase
      // Firebase returns the object as an array
      // That includes a property in every cell
      // Because of this we make a loop that does two things
      // Collects the key from that cell and it's content using PAYLOAD.VAL
      ref.map((item: any) => {
        this.user[item.key] = item.payload.val();
        // console.log(item.payload.val())
      })
      console.log(this.user)
    })
  }

}
