import { Component, OnInit } from '@angular/core';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent implements OnInit {

  constructor(private authSer:AuthFbService) { }

  ngOnInit(): void {
    this.authSer.checkUserAuth();
  }

}
