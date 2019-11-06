import { Component, OnInit, NgZone } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SchoolService } from 'src/app/_services/school.service';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.scss']
})
export class SchoolAddComponent implements OnInit {

  schoolForm: FormGroup;
  schoolArr: any [];

  ngOnInit() {
    this.addSchool()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public schoolService: SchoolService
  ){ }

  addSchool() {
    this.schoolForm = this.fb.group({
      name: [''],
      // start_date: [''],
      // end_date: ['']
    })
  }

  submitForm() {
    this.schoolService.CreateSchool(this.schoolForm.value).subscribe(res => {
      console.log('School added!')
      this.ngZone.run(() => this.router.navigateByUrl('/school-list'))
    });
  }
}