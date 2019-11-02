import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../../../_services/license.service';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit {

  LicenseList: any = [];

  ngOnInit() {
    this.loadLicenses();
  }

  constructor(
    public LicenseService: LicenseService
  ){ }

  // Licenses list
  loadLicenses() {
    return this.LicenseService.GetLicenses().subscribe((data: {}) => {
      this.LicenseList = data;
    })
  }

}
