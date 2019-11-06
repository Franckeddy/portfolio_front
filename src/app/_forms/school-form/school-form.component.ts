import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/_services/school.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss']
})
export class SchoolFormComponent implements OnInit {

  schoolForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private schoolService: SchoolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.schoolForm = this.formBuilder.group(
      {
        name: [''],
        // start_date: [''],
        // end_date: [''],
        // candidat: [''],
        // formations: [''],
      }
    );
  }
  onSaveSchool() {
    const name = this.schoolForm.get('name').value;
    // const start_date = this.schoolForm.get('start_date').value;
    // const end_date = this.schoolForm.get('end_date').value;
    // const candidat = this.schoolForm.get('candidat').value;
    // const formations = this.schoolForm.get('formations').value;
  }
}
