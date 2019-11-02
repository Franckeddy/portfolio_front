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
    public LicenseService: SchoolService
  ){ }

  // Licenses list
  loadSchools() {
    return this.LicenseService.GetSchools().subscribe((data: {}) => {
      this.SchoolList = data;
    })
  }

}
