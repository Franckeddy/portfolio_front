import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../_services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  CompanyList: any = [];

  ngOnInit() {
    this.loadCompanies();
  }

  constructor(
    public CompanyService: CompanyService
  ){ }

  // Licenses list
  loadCompanies() {
    return this.CompanyService.GetCompanies().subscribe((data: {}) => {
      this.CompanyList = data;
    })
  }

}
