import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  username!: any;
  imageUrl!: any;
  constructor(private authService: AuthService) {}

  
  ngOnInit(): void {
    if(sessionStorage.getItem("name")){
      this.username = sessionStorage.getItem('name');
      this.imageUrl = sessionStorage.getItem('imageURL');
    }else{
      this.username = "Eve Holt";
      this.imageUrl = "https://img.icons8.com/bubbles/100/000000/administrator-male.png";
    }
  }

  logout(){
    sessionStorage.clear();
    this.authService.logout();
    this.authService.setStatus(false);
  }

  
}
