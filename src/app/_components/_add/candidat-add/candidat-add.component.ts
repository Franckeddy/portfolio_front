import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CandidatService} from '../../../_services/candidats.service';

@Component({
  selector: 'app-candidat-add',
  templateUrl: './candidat-add.component.html',
  styleUrls: ['./candidat-add.component.scss']
})
export class CandidatAddComponent implements OnInit {

  candidatForm: FormGroup;
  candidatArr: any = [];

  ngOnInit() {
    this.addCandidat()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public candidatService: CandidatService
  ){ }

  addCandidat() {
    this.candidatForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      adress: [''],
      town: [''],
      zipcode: [''],
      date_of_birth: [''],
          // langue: this._formBuilder.group({
      //   name: [null, [Validators.required]],
      //   level: [null, [Validators.required]],
      // }),
            // school: this._formBuilder.group({
      //   name: [null, [Validators.required]],
      //   level: [null, [Validators.required]],
      // })
            // license: this._formBuilder.group({
      //   name: [null, [Validators.required]],
      //   level: [null, [Validators.required]],
      // }),
            // langue: this._formBuilder.group({
      //   name: [null, [Validators.required]],
      //   level: [null, [Validators.required]],
      // }),
            // langue: this._formBuilder.group({
      //   name: [null, [Validators.required]],
      //   level: [null, [Validators.required]],
      // })
  })
  }
  
  submitForm() {
    this.candidatService.CreateCandidat(this.candidatForm.value).subscribe(res => {
      console.log('Candidat added!')
      this.ngZone.run(() => this.router.navigateByUrl('/candidats-list'))
    });
  }
}
