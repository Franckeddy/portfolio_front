import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LicenseService } from 'src/app/_services/license.service';

@Component({
  selector: 'app-license-add',
  templateUrl: './license-add.component.html',
  styleUrls: ['./license-add.component.scss']
})
export class LicenseAddComponent implements OnInit {

  licenseForm: FormGroup;
  licenseArr: any [];

  ngOnInit() {
    this.addLicense()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public licenseService: LicenseService
  ){ }

  addLicense() {
    this.licenseForm = this.fb.group({
      name: [''],
      // start_date: [''],
      // end_date: ['']
    })
  }

  submitForm() {
    this.licenseService.CreateLicense(this.licenseForm.value).subscribe(res => {
      console.log('License added!')
      this.ngZone.run(() => this.router.navigateByUrl('/license-list'))
    });
  }
}