import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, AfterViewInit {

  map: any;
  @ViewChild('mapElement') mapElement: any;
  lat! : number;
  lng! : number;
  center!: google.maps.LatLngLiteral
  markers: any[]=[];
  // markers = [
  //   { lat: 19.0760, lng: 72.8777 },
  //   // { lat: 7.92658, lng: -12.05228 },
  //   // { lat: 48.75606, lng: -118.859 },
  //   // { lat: 5.19334, lng: -67.03352 },
  //   // { lat: 12.09407, lng: 26.31618 },
  //   // { lat: 47.92393, lng: 78.58339 }
  // ];
  loaded: boolean = false;
  users!: any;
  userav: any;
  user: any;
  id!: number;
  constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) { 
    //this.id = this.route.snapshot.params['id'];
    
  }
  ngAfterViewInit(): void {
    this.lat = this.user.address.geo.lat;
    this.lng = this.user.address.geo.lng;
    this.markers.push({
      lat: this.lat,
      lng: this.lng
    })
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.markers.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map 
      });
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserDetails();
    this.users = this.userService.getUsers();
    this.user = this.users[this.id-1];
  }

  onPress(){
    this.location.back();
  }
  getUserDetails() {
    this.userService.getUser(this.id).subscribe({
      next: (response) => {
        this.userav = response.data;
        this.loaded = true;
      }
    });
  }
}
