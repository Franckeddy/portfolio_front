import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/_services/formation.service';

@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.scss']
})
export class FormationAddComponent implements OnInit {

  formationForm: FormGroup;
  formationArr: any [];

  ngOnInit() {
    this.addFormation()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public formationService: FormationService
  ){ }

  addFormation() {
    this.formationForm = this.fb.group({
      name: [''],
      // start_date: [''],
      // end_date: ['']
    })
  }

  submitForm() {
    this.formationService.CreateFormation(this.formationForm.value).subscribe(res => {
      console.log('Formation added!')
      this.ngZone.run(() => this.router.navigateByUrl('/formation-list'))
    });
  }
}