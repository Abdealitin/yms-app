import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.css']
})
export class UserSuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id!: number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }


}
