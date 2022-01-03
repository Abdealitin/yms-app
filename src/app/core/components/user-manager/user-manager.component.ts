import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class UserManagerComponent implements OnInit {

  // Some array of things.
  public employeedata = [];
  // Pagination parameters.
  p: number = 1;
  count: number = 8;
  users: any[] = [];
  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
