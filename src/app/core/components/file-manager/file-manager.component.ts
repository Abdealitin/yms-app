import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// declare const google: any;

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit, AfterViewInit {

  map: any;
  @ViewChild('mapElement') mapElement: any;
  lat = 19.0760;
  lng = 72.8777;
  center!: google.maps.LatLngLiteral
  markers = [
    { lat: 19.0760, lng: 72.8777 },
    // { lat: 7.92658, lng: -12.05228 },
    // { lat: 48.75606, lng: -118.859 },
    // { lat: 5.19334, lng: -67.03352 },
    // { lat: 12.09407, lng: 26.31618 },
    // { lat: 47.92393, lng: 78.58339 }
  ];

  constructor() { 
  }
  ngAfterViewInit(): void {

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

 
  
  ngOnInit(): void {}

}
