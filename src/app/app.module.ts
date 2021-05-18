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
import { CustomersListComponent } from './comps/customers-list/customers-list.component';
import { AddCustomersComponent } from './comps/add-customers/add-customers.component';
import { CustomerInfoComponent } from './comps/customer-info/customer-info.component';
import { CustomerEditComponent } from './comps/customer-edit/customer-edit.component';
import { SignupComponent } from './comps/signup/signup.component';
import { ContactListComponent } from './comps/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdsComponent,
    AppAdminComponent,
    HeaderAdminComponent,
    SideNavAdminComponent,
    CustomersListComponent,
    AddCustomersComponent,
    CustomerInfoComponent,
    CustomerEditComponent,
    SignupComponent,
    ContactListComponent
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
