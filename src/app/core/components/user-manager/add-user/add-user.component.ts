import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;
  user: any;
  lat: any;
  lng: any;

  constructor(private userService: UserService, private route: Router) { 
    this.userForm = new FormGroup({
      username: new FormControl('Admin'),
      password: new FormControl(''),
      email: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
    })
  }

  ngOnInit(): void {
    if(!navigator.geolocation){
      console.log("location not supported!")
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("lat: "+position.coords.latitude+" lng: "+position.coords.longitude);
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    })
  }

  submitForm(){
    
    console.log("Hello");
    console.log(this.userForm.get('username')?.value);
    console.log();
    this.user = {
      id: this.userService.result.length+1,
      name: this.userForm.get('username')?.value,
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      email: this.userForm.get('email')?.value,
      address: {
        city: this.userForm.get('city')?.value,
      zipcode: this.userForm.get('zipcode')?.value,
      geo : {
        lat: this.lat,
        lng: this.lng
      }
      }
    }
    this.userService.addUser(this.user);
    this.route.navigate(['/useradded',this.user.id]);
  }

}
