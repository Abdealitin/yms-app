import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CalendarComponent } from './core/components/calendar/calendar.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { FileManagerComponent } from './core/components/file-manager/file-manager.component';
import { LoginComponent } from './core/components/login/login.component';
import { MessagesComponent } from './core/components/messages/messages.component';
import { PaymentsComponent } from './core/components/payments/payments.component';
import { AddproductComponent } from './core/components/product-manager/addproduct/addproduct.component';
import { ProductDetailComponent } from './core/components/product-manager/product-detail/product-detail.component';
import { ProductManagerComponent } from './core/components/product-manager/product-manager.component';
import { TrafficAnalyzerComponent } from './core/components/traffic-analyzer/traffic-analyzer.component';
import { AddUserComponent } from './core/components/user-manager/add-user/add-user.component';
import { UserDetailsComponent } from './core/components/user-manager/user-details/user-details.component';
import { UserManagerComponent } from './core/components/user-manager/user-manager.component';
import { UserSuccessComponent } from './core/components/user-manager/user-success/user-success.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
   {path: 'users', component: UserManagerComponent, canActivate: [AuthGuard]},
   {path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard]},
   {path: 'useradded/:id', component: UserSuccessComponent, canActivate: [AuthGuard]},
   {path: 'user/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
   {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
   {path: 'product', component: ProductManagerComponent, canActivate: [AuthGuard]},
   {path: 'addproduct', component: AddproductComponent, canActivate: [AuthGuard]},
   {path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard]},
   {path: 'files', component: FileManagerComponent, canActivate: [AuthGuard]},
   {path: 'traffic', component: TrafficAnalyzerComponent, canActivate: [AuthGuard]},
   {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
   {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
   {path: 'payments', component: PaymentsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
