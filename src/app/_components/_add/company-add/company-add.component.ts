import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  companyForm: FormGroup;
  companyArr: any = [];

  ngOnInit() {
    this.addCompany()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public companyService: CompanyService
  ){ }

  addCompany() {
    this.companyForm = this.fb.group({
      name: [''],
      // start_date: [''],
      // end_date: [''],
    })
  }

  submitForm() {
    this.companyService.CreateCompany(this.companyForm.value).subscribe(res => {
      console.log('Company added!')
      this.ngZone.run(() => this.router.navigateByUrl('/companies-list'))
    });
  }
}