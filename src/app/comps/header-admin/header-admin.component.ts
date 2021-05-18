import { Component, OnInit } from '@angular/core';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  user:any = {}
 
  constructor(private authSer:AuthFbService) { }

  logOut(){
    this.authSer.logOut();
  
  }

  ngOnInit(): void {
    this.user = this.authSer.getUserData();
    
  }

}
