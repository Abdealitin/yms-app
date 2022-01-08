import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './components/user-manager/user.service';
import { AddUserComponent } from './components/user-manager/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimitvalPipe } from './components/user-manager/limitval.pipe';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { TrafficAnalyzerComponent } from './components/traffic-analyzer/traffic-analyzer.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { MessagesComponent } from './components/messages/messages.component';
import { UserDetailsComponent } from './components/user-manager/user-details/user-details.component';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { HttpClientModule } from  '@angular/common/http';
import { ProductService } from './components/product-manager/product.service';
import { ProductDetailComponent } from './components/product-manager/product-detail/product-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from '../login.service';
import { UserSuccessComponent } from './components/user-manager/user-success/user-success.component';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ImgMagnifier } from 'ng-img-magnifier';
import { GetRatingPipe } from './components/product-manager/get-rating.pipe';
import { AddproductComponent } from './components/product-manager/addproduct/addproduct.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';



@NgModule({
  declarations: [
    SideNavbarComponent,
    TopNavbarComponent,
    UserManagerComponent,
    AddUserComponent,
    LimitvalPipe,
    DashboardComponent,
    ProductManagerComponent,
    FileManagerComponent,
    TrafficAnalyzerComponent,
    CalendarComponent,
    PaymentsComponent,
    MessagesComponent,
    UserSuccessComponent,
    UserDetailsComponent,
    ProductDetailComponent,
    LoginComponent,
    GetRatingPipe,
    AddproductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgxImgZoomModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    NgxImageZoomModule,
    ImgMagnifier,
    //Ng4LoadingSpinnerModule.forRoot()
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyClrkSJ0YLKHqBSCHX0L3lyMtbqvIFBhxA"
    // })
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    SideNavbarComponent,
    TopNavbarComponent,
    UserManagerComponent,
    AddUserComponent,
    LoginComponent
  ],
  providers: [UserService, ProductService, LoginService, AuthService, AuthGuard]
})
export class CoreModule { }
