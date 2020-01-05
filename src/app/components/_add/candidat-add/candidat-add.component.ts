import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatService } from '../../../services/candidats.service';

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
  ) { }

  addCandidat() {
    this.candidatForm = this.fb.group({
      'candidat': this.fb.array([
        this.initCandidat(),
      ]),
    });
    this.candidatForm.valueChanges.subscribe(data => this.validateForm());
    this.validateForm();
  }

  initCandidat() {
    return this.candidatForm = this.fb.group({
      //  ---------------------forms fields on x level ------------------------
      firstname: [''],
      lastname: [''],
      email: ['', [Validators.required, Validators.pattern('/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/')]],
      adress: [''],
      zipcode: [''],
      date_of_birth: [''],
      town: [''],
      short_description: [''],
      // ---------------------------------------------------------------------
      langues: this.fb.array([
        this.initLangue(),
      ]),
      licenses: this.fb.array([
        this.initLicense(),
      ]),
      schools: this.fb.array([
        this.initSchool(),
      ]),
      companies: this.fb.array([
        this.initCompany(),
      ]),
    });
  }

  public initSchool() {
    return this.fb.group({
      //  ---------------------forms fields on y level ------------------------
      name: [''],
      // ---------------------------------------------------------------------
      formations: this.fb.array([
        this.initFormation(),
      ]),
    });
  }

  initFormation() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      name: [''],
      date_obtention: [''],
      // ---------------------------------------------------------------------
    });
  }

  initCompany() {
    return this.fb.group({
      //  ---------------------forms fields on a level ------------------------
      name: [''],
      // ---------------------------------------------------------------------
      activity_areas: this.fb.array([
        this.initActivityArea()
      ])
    })
  }

  initActivityArea() {
    return this.fb.group({
      //  ---------------------forms fields on b level ------------------------
      name: [''],
      // ---------------------------------------------------------------------
    });
  }

  initLangue() {
    return this.fb.group({
      //  ---------------------forms fields on c level ------------------------
      name: [''],
      level: [''],
      // ---------------------------------------------------------------------
    });
  }

  initLicense() {
    return this.fb.group({
      //  ---------------------forms fields on d level ------------------------
      name: [''],
      date_obtention: [''],
      // ---------------------------------------------------------------------
    });
  }

  // TODO level attribut à implémenter

  addLangue(ix: number) {
    const control = (this.candidatForm.controls['candidat'] as FormArray).at(ix).get('langues') as FormArray;
    control.push(this.initLangue());
  }

  delLangue(index: number) {
    const arrayControl = (this.candidatForm.controls['candidat'] as FormArray).at(index).get('langues') as FormArray;
    arrayControl.removeAt(index);
  }

  addLicense(ix: number) {
    const control = (this.candidatForm.controls['candidat'] as FormArray).at(ix).get('licenses') as FormArray;
    control.push(this.initLicense());
  }

  delLicense(index: number) {
    const arrayControl = (this.candidatForm.controls['candidat'] as FormArray).at(index).get('licenses') as FormArray;
    arrayControl.removeAt(index);
  }

  addSchool(ix: number) {
    const control = (this.candidatForm.controls['candidat'] as FormArray).at(ix).get('schools') as FormArray;
    control.push(this.initSchool());
  }

  delSchool(index: number) {
    const arrayControl = (this.candidatForm.controls['candidat'] as FormArray).at(index).get('schools') as FormArray;
    arrayControl.removeAt(index);
  }

  addFormation(ix: number, iy: number) {
    const control = ((this.candidatForm.controls['candidat'] as FormArray).at(ix).get('schools') as FormArray).at(iy).get('formations') as FormArray;
    control.push(this.initFormation());
  }

  delFormation(ix: number, iy: number): void {
    const arrayControl = ((this.candidatForm.controls['candidat'] as FormArray).at(ix).get('schools') as FormArray).at(iy).get('formations') as FormArray;
    arrayControl.removeAt(ix);
  }

  addCompany(ix: number) {
    const control = (this.candidatForm.controls['candidat'] as FormArray).at(ix).get('companies') as FormArray;
    control.push(this.initCompany());
  }

  delCompany(index: number) {
    const arrayControl = (this.candidatForm.controls['candidat'] as FormArray).at(index).get('companies') as FormArray;
    arrayControl.removeAt(index);
  }

  addActivityArea(ix: number, ia: number): void {
    const control = ((this.candidatForm.controls['candidat'] as FormArray).at(ix).get('companies') as FormArray).at(ia).get('activity_areas') as FormArray;
    control.push(this.initActivityArea());
  }

  delActivityArea(ix: number, ia: number): void {
    const arrayControl = ((this.candidatForm.controls['candidat'] as FormArray).at(ix).get('companies') as FormArray).at(ia).get('activity_areas') as FormArray;
    arrayControl.removeAt(ix);
  }

  formErrors = {
    candidat: this.CandidatErrors()
  };

  CandidatErrors() {
    return [{
      //  ---------------------forms errors on x level ------------------------
      firstname: '',
      lastname: '',
      town: '',
      zipcode: '',
      email: '',
      // ---------------------------------------------------------------------
      langues: this.LangueErrors(),
      licenses: this.LicenseErrors(),
      schools: this.SchoolErrors(),
      companies: this.CompanyErrors(),
    }];
  }

  SchoolErrors() {
    return [{
      //  ---------------------forms errors on y level ------------------------
      name: '',
      // ----------------------------------------------------------------------
      formations: this.FormationErrors()
    }];
  }

  CompanyErrors() {
    return [{
      //  ---------------------forms errors on a level ------------------------
      name: '',
      // ----------------------------------------------------------------------
      activity_areas: this.ActivityAreaErrors()
    }];
  }

  FormationErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      name: '',
      // ---------------------------------------------------------------------
    }];
  }

  ActivityAreaErrors() {
    return [{
      //  ---------------------forms errors on b level ------------------------
      name: '',
      // ---------------------------------------------------------------------
    }];
  }

  LangueErrors() {
    return [{
      //  ---------------------forms errors on c level ------------------------
      name: '',
      level: '',
      // ---------------------------------------------------------------------
    }];
  }

  LicenseErrors() {
    return [{
      //  ---------------------forms errors on d level ------------------------
      name: '',
      date_obtention: '',
      // ---------------------------------------------------------------------
    }];
  }

  validationMessages = {
    candidat: {
      firstname: {
        required: 'firstname is required.',
        pattern: 'firstname must be 3 characters long.'
      },
      lastname: {
        required: 'lastname is required.',
        pattern: 'lastname must be 3 characters long.'
      },
      town: {
        required: 'town is required.',
        pattern: 'town must be 3 characters long.'
      },
      zipcode: {
        required: 'zipcode is required.',
        pattern: 'zipcode must be 3 characters long.'
      },
      email: {
        required: 'email is required.',
        pattern: 'email must be 3 characters long.'
      },
      langues: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        level: {
          required: 'level is required.',
          pattern: 'level must be 3 characters long.'
        },
      },
      licenses: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        date_obtention: {
          required: 'date_obtention is required.',
          pattern: 'date_obtention must be 3 characters long.'
        }
      },
      schools: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        formations: {
          name: {
            required: 'name is required.',
            pattern: 'name must be 3 characters long.'
          },
        }
      },
      companies: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        activity_areas: {
          name: {
            required: 'name is required.',
            pattern: 'name must be 3 characters long.'
          }
        }
      }
    }
  };

  // form validation
  validateForm() {
    this.validateCandidat();
  }
  validateCandidat() {
    let CandidatA = this.candidatForm['controls'].candidat as FormArray;
    console.log('validateCandidat');
    this.formErrors.candidat = [];
    let x = 1;
    while (x <= CandidatA.length) {
      this.formErrors.candidat.push({
        firstname: '',
        lastname: '',
        town: '',
        zipcode: '',
        email: '',
        schools: [{
          name: '',
          formations: [{
            name: '',
          }],
        }],
        companies: [{
          name: '',
          activity_areas: [{
            name: '',
          }],
        }],
        langues: [{
          name: '',
          level: '',
        }],
        licenses: [{
          name: '',
          date_obtention: '',
        }],
      });
      let X = <FormGroup>CandidatA.at(x - 1);
      console.log('X--->');
      console.log(X.value);
      for (let field in X.controls) {
        let input = X.get(field);
        console.log('field--->');
        console.log(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.candidat[x - 1][field] = this.validationMessages.candidat[field][error];
          }
        }
      }
      this.validateSchool(x);
      this.validateCompany(x);
      x++;
    }
  }

  validateSchool(x: number) {
    console.log('validateSchool');
    let SchoolA = (this.candidatForm.controls['candidat'] as FormArray).at(x - 1).get('schools') as FormArray;
    this.formErrors.candidat[x - 1].schools = [];
    let y = 1;
    while (y <= SchoolA.length) {
      this.formErrors.candidat[x - 1].schools.push({
        name: '',
        formations: [{
          name: '',
        }],
      });
      let Y = <FormGroup>SchoolA.at(y - 1);
      for (let field in Y.controls) {
        let input = Y.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.candidat[x - 1].schools[y - 1][field] = this.validationMessages.candidat.schools[field][error];
          }
        }
      }
      this.validateFormation(x, y);
      y++;
    }
  }

  validateFormation(x: number, y: number) {
    console.log('validateFormation--');
    let FormationA = ((this.candidatForm.controls['candidat'] as FormArray).at(x - 1).get('schools') as FormArray).at(y - 1).get('formations') as FormArray;
    this.formErrors.candidat[x - 1].schools[y - 1].formations = [];
    let z = 1;
    while (z <= FormationA.length) {
      this.formErrors.candidat[x - 1].schools[y - 1].formations.push({
        name: '',
      });
      let Z = <FormGroup>FormationA.at(z - 1);
      for (let field in Z.controls) {
        let input = Z.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.candidat[x - 1].schools[y - 1].formations[z - 1][field] = this.validationMessages.candidat.schools.formations[field][error];
          }
        }
      }
      z++;
    }
  }

  validateCompany(x: number) {
    console.log('validateCompany');
    let CompanyA = (this.candidatForm.controls['candidat'] as FormArray).at(x - 1).get('companies') as FormArray;
    this.formErrors.candidat[x - 1].companies = [];
    let a = 1;
    while (a <= CompanyA.length) {
      this.formErrors.candidat[x - 1].companies.push({
        name: '',
        activity_areas: [{
          name: '',
        }],
      });
      let A = <FormGroup>CompanyA.at(a - 1);
      for (let field in A.controls) {
        let input = A.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.candidat[x - 1].companies[a - 1][field] = this.validationMessages.candidat.companies[field][error];
          }
        }
      }
      this.validateActivityArea(x, a);
      a++;
    }
  }

  validateActivityArea(x: number, y: number) {
    console.log('validateActivityArea--');
    let ActivityAreaA = ((this.candidatForm.controls['candidat'] as FormArray).at(x - 1).get('companies') as FormArray).at(y - 1).get('activity_areas') as FormArray;
    this.formErrors.candidat[x - 1].companies[y - 1].activity_areas = [];
    let b = 1;
    while (b <= ActivityAreaA.length) {
      this.formErrors.candidat[x - 1].companies[y - 1].activity_areas.push({
        name: '',
      });
      let C = <FormGroup>ActivityAreaA.at(b - 1);
      for (let field in C.controls) {
        let input = C.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.candidat[x - 1].companies[y - 1].activity_areas[b - 1][field] = this.validationMessages.candidat.companies.activity_areas[field][error];
          }
        }
      }
      b++;
    }
  }

  validateLangue(x: number) {
    console.log('validateLangue');
    let LangueA = (this.candidatForm.controls['candidat'] as FormArray).at(x - 1).get('langues') as FormArray;
    this.formErrors.candidat[x - 1].langues = [];
    let c = 1;
    while (c <= LangueA.length) {
      this.formErrors.candidat[x - 1].langues.push({
        name: '',
        level: '',
      });
      let C = <FormGroup>LangueA.at(c - 1);
      for (let field in C.controls) {
        let input = C.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.candidat[x - 1].langues[c - 1][field] = this.validationMessages.candidat.langues[field][error];
          }
        }
      }
      this.validateLangue(x);
      c++;
    }
  }

  validateLicense(x: number) {
    console.log('validateLicense');
    let LicenseA = (this.candidatForm.controls['candidat'] as FormArray).at(x - 1).get('licenses') as FormArray;
    this.formErrors.candidat[x - 1].licenses = [];
    let d = 1;
    while (d <= LicenseA.length) {
      this.formErrors.candidat[x - 1].licenses.push({
        name: '',
        date_obtention: '',
      });
      let D = <FormGroup>LicenseA.at(d - 1);
      for (let field in D.controls) {
        let input = D.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.candidat[x - 1].licenses[d - 1][field] = this.validationMessages.candidat.licenses[field][error];
          }
        }
      }
      this.validateLicense(x);
      d++;
    }
  }

  submitForm() {
    this.candidatService.CreateCandidat(this.candidatForm.value).subscribe(res => {
      console.log('Candidat added!');
      this.ngZone.run(() => this.router.navigateByUrl('/'));
    });
  }
}
