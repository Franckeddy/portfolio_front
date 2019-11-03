import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../../_services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  SchoolList: any = [];

  ngOnInit() {
    this.loadSchools();
  }

  constructor(
    public SchoolService: SchoolService
  ){ }

  // School list
  loadSchools() {
    return this.SchoolService.GetSchools().subscribe((data: {}) => {
      this.SchoolList = data;
    })
  }

}
