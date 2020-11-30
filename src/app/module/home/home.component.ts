import { Component, OnInit } from '@angular/core';
import { SharedList } from 'src/app/shared/list/shared-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category = SharedList.CategoryList;

  constructor() { }

  ngOnInit(): void {

  }

}
