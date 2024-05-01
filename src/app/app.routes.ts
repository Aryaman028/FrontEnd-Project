import { Routes } from '@angular/router';
import { accessSync } from 'fs';
import { AccountComponent } from './account/account.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MylistComponent } from './mylist/mylist.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TvshowComponent } from './tvshow/tvshow.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'tvshow',
        component: TvshowComponent
    },
    {
        path: 'subscription',
        component: SubscriptionComponent

    },
    {
        path:'bollywood',
        component:BollywoodComponent
    }, 
    {
        path:'account',
        component:AccountComponent
    },
    {
        path:'mylist',
        component:MylistComponent
    },
    {
        path:'payment',
        component:PaymentComponent
    }

];
