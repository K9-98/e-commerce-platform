
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
    {path:'',redirectTo:"/home",pathMatch:'full'},    
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'store',component:StoreComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'cart',component:CartComponent},
    {path:'faq',component:FaqComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]
})
export class AppRoutingModule{}