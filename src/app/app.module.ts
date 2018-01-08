import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
//modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageHeaderComponent } from './components/common/page-header/page-header.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { StoreComponent } from './components/store/store.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { StaticDataSource } from './models/mock-data';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { FaqComponent } from './components/faq/faq.component';


export const firebaseConfig = {
  apiKey: "AIzaSyDB4RtMR3x0tXw5GoO4ASX-Lhje3pLfLeY",
  authDomain: "k9-ecoms.firebaseapp.com",
  databaseURL: "https://k9-ecoms.firebaseio.com",
  projectId: "k9-ecoms",
  storageBucket: "k9-ecoms.appspot.com",
  messagingSenderId: "131410759612"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageHeaderComponent,
    NavbarComponent,
    StoreComponent,
    CartSummaryComponent,
    SignUpComponent,
    CartComponent,
    FaqComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthenticationService,CartService,ProductService,StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
