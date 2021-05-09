import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// fire base
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

//auth fire base
import {AngularFireAuthModule} from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { ProdsComponent } from './firecomps/prods/prods.component';
import { AppAdminComponent } from './comps/app-admin/app-admin.component';
import { HeaderAdminComponent } from './comps/header-admin/header-admin.component';
import { SideNavAdminComponent } from './comps/side-nav-admin/side-nav-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdsComponent,
    AppAdminComponent,
    HeaderAdminComponent,
    SideNavAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,"clientpanel"),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
