import { Component, OnInit } from '@angular/core';
import { SharedList } from './shared/list/shared-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  category = SharedList.CategoryList

  ngOnInit(): void {
    console.log("in main");
  }

  title = 'AgileProjectManagementToolkitFE';
}
