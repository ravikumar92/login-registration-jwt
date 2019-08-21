import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgetPasswordComponent } from './user/forget-password/forget.component';
import { AuthGuard } from './auth/auth.guard';
import { ResetPasswordComponent } from './user/resetPassword/reset-password.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'forget', component: UserComponent,
        children: [{path: '', component: ForgetPasswordComponent}]
    },
    {
        path: 'reset', component: ResetPasswordComponent
    }
];