import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
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
      'Candidat': this.fb.array([
        this.initX(),
      ])
    });
    this.candidatForm.valueChanges.subscribe(data => this.validateForm());
    this.validateForm();
  }

  initX() {
    return this.fb.group({
      //  ---------------------forms fields on x level ------------------------
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]{3,16}')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]{3,16}')]],
      email: ['', [Validators.required, Validators.pattern('/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/')]],
      adress: [''],
      zipcode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      date_of_birth: [''],
      town: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]{3,16}')]],
      short_description: [''],
      // ---------------------------------------------------------------------
      'Langue': this.fb.array([
        this.initLangue()
      ]),
      'License': this.fb.array([
        this.initLicense()
      ]),
      'School': this.fb.array([
        this.initSchool()
      ]),
      'Company': this.fb.array([
        this.initCompany()
      ])
    });
  }

  initSchool() {
    return this.fb.group({
      //  ---------------------forms fields on y level ------------------------
      name: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      // ---------------------------------------------------------------------
      'Diplome': this.fb.array([
        this.initDiplome()
      ])
    })
  }

  initDiplome() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      name: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      date_obtention: ['']
      // ---------------------------------------------------------------------
    })
  }

  initCompany() {
    return this.fb.group({
      //  ---------------------forms fields on y level ------------------------
      name: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      // ---------------------------------------------------------------------
      'ActivityArea': this.fb.array([
        this.initActivityArea()
      ])
    })
  }

  initActivityArea() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      name: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      // ---------------------------------------------------------------------
    })
  }

  initLangue() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      name: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      level: ['']
      // ---------------------------------------------------------------------
    })
  }

  initLicense() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      name: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      date_obtention: ['']
      // ---------------------------------------------------------------------
    })
  }

  // addX() {
  //   const control = <FormArray>this.candidatForm.controls['Candidat'];
  //   control.push(this.initX());
  // }

  // delX(index: number): void {
  //   const arrayControl = <FormArray>this.candidatForm.controls['Candidat'];
  //   arrayControl.removeAt(index);
  // }

  addLangue(ix: number) {
    const control = (<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Langue') as FormArray;
    control.push(this.initLangue());
  }

  delLangue(index: number) {
    const arrayControl = (<FormArray>this.candidatForm.controls['Candidat']).at(index).get('Langue') as FormArray;
    arrayControl.removeAt(index);
  }

  addLicense(ix: number) {
    const control = (<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('License') as FormArray;
    control.push(this.initLicense());
  }

  delLicense(index: number) {
    const arrayControl = (<FormArray>this.candidatForm.controls['Candidat']).at(index).get('License') as FormArray;
    arrayControl.removeAt(index);
  }

  addSchool(ix: number) {
    const control = (<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('School') as FormArray;
    control.push(this.initSchool());
  }

  delSchool(index: number) {
    const arrayControl = (<FormArray>this.candidatForm.controls['Candidat']).at(index).get('School') as FormArray;
    arrayControl.removeAt(index);
  }

  addDiplome(ix: number, iy: number) {
    const control = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('School') as FormArray).at(iy).get('Diplome') as FormArray;
    control.push(this.initDiplome());
  }

  delDiplome(ix: number, iy: number): void {
    const arrayControl = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('School') as FormArray).at(iy).get('Diplome') as FormArray;
    arrayControl.removeAt(ix);
  }

  addCompany(ix: number) {
    const control = (<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Company') as FormArray;
    control.push(this.initCompany());
  }

  delCompany(index: number) {
    const arrayControl = (<FormArray>this.candidatForm.controls['Candidat']).at(index).get('Company') as FormArray;
    arrayControl.removeAt(index);
  }

  addActivityArea(ix: number, iy: number): void {
    const control = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Company') as FormArray).at(iy).get('ActivityArea') as FormArray;
    control.push(this.initActivityArea());
  }

  delActivityArea(ix: number, iy: number): void {
    const arrayControl = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Company') as FormArray).at(iy).get('ActivityArea') as FormArray;
    arrayControl.removeAt(ix);
  }

  formErrors = {
    Candidat: this.CandidatErrors()
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
      'Langue': this.LangueErrors(),
      'License': this.LicenseErrors(),
      'School': this.SchoolErrors(),
      'Company': this.CompanyErrors(),
    }]
  }

  SchoolErrors() {
    return [{
      //  ---------------------forms errors on y level ------------------------
      name: '',
      // ----------------------------------------------------------------------
      Diplome: this.DiplomeErrors()
    }]
  }

  CompanyErrors() {
    return [{
      //  ---------------------forms errors on y level ------------------------
      name: '',
      // ----------------------------------------------------------------------
      ActivityArea: this.ActivityAreaErrors()
    }]
  }

  DiplomeErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      name: '',
      date_obtention: ''
      // ---------------------------------------------------------------------
    }]
  }

  ActivityAreaErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      name: ''
      // ---------------------------------------------------------------------
    }]
  }

  LangueErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      name: '',
      level: ''
      // ---------------------------------------------------------------------
    }]
  }

  LicenseErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      name: '',
      date_obtention: ''
      // ---------------------------------------------------------------------
    }]
  }

  validationMessages = {
    Candidat: {
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
      Langue: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        level: {
          required: 'level is required.',
          pattern: 'level must be 3 characters long.'
        },
      },
      License: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        date_obtention: {
          required: 'date_obtention is required.',
          pattern: 'date_obtention must be 3 characters long.'
        }
      },
      School: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        Diplome: {
          name: {
            required: 'name is required.',
            pattern: 'name must be 3 characters long.'
          },
          date_obtention: {
            required: 'date_obtention is required.',
            pattern: 'date_obtention must be 3 characters long.'
          }
        }
      },
      Company: {
        name: {
          required: 'name is required.',
          pattern: 'name must be 3 characters long.'
        },
        ActivityArea: {
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
    let CandidatA = <FormArray>this.candidatForm['controls'].Candidat;
    console.log('validateCandidat');
    this.formErrors.Candidat = [];
    let x = 1;
    while (x <= CandidatA.length) {
      this.formErrors.Candidat.push({
      firstname: '',
      lastname: '',
      town: '',
      zipcode: '',
      email: '',
        School: [{
          name: '',
          Diplome: [{
            name: '',
            date_obtention: ''
          }]
        }],
        Company: [{
          name: '',
          ActivityArea: [{
            name: ''
          }]
        }],
        Langue: [{
          name: '',
          level: ''
        }],
        License: [{
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
            this.formErrors.Candidat[x - 1][field] = this.validationMessages.Candidat[field][error];
          }
        }
      }
      this.validateSchool(x);
      this.validateCompany(x);
      //this.validateDiplome(x);
      x++;
    }
  }

  validateSchool(x: number) {
    console.log('validateSchool');
    let SchoolA = (<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('School') as FormArray;
    this.formErrors.Candidat[x - 1].School = [];
    let y = 1;
    while (y <= SchoolA.length) {
      this.formErrors.Candidat[x - 1].School.push({
        name: '',
        Diplome: [{
          name: '',
          date_obtention: ''
        }]
      });
      let Y = <FormGroup>SchoolA.at(y - 1);
      for (let field in Y.controls) {
        let input = Y.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].School[y - 1][field] = this.validationMessages.Candidat.School[field][error];
          }
        }
      }
      this.validateDiplome(x, y);
      y++;
    }
  }

  validateDiplome(x, y) {
    console.log('validateDiplome--');
    let DiplomeA = ((<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('School') as FormArray).at(y - 1).get('Diplome') as FormArray;
    this.formErrors.Candidat[x - 1].School[y - 1].Diplome = [];
    let z = 1;
    while (z <= DiplomeA.length) {
      this.formErrors.Candidat[x - 1].School[y - 1].Diplome.push({
        name: '',
        date_obtention: ''
      });
      let Z = <FormGroup>DiplomeA.at(z - 1);
      for (let field in Z.controls) {
        let input = Z.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].School[y - 1].Diplome[z - 1][field] = this.validationMessages.Candidat.School.Diplome[field][error];
          }
        }
      }
      z++;
    }
  }

  validateCompany(x: number) {
    console.log('validateCompany');
    let CompanyA = (<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('Company') as FormArray;
    this.formErrors.Candidat[x - 1].Company = [];
    let y = 1;
    while (y <= CompanyA.length) {
      this.formErrors.Candidat[x - 1].Company.push({
        name: '',
        ActivityArea: [{
          name: ''
        }]
      });
      let Y = <FormGroup>CompanyA.at(y - 1);
      for (let field in Y.controls) {
        let input = Y.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].Company[y - 1][field] = this.validationMessages.Candidat.Company[field][error];
          }
        }
      }
      this.validateActivityArea(x, y);
      y++;
    }
  }

  validateActivityArea(x, y) {
    console.log('validateActivityArea--');
    let ActivityAreaA = ((<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('Company') as FormArray).at(y - 1).get('ActivityArea') as FormArray;
    this.formErrors.Candidat[x - 1].Company[y - 1].ActivityArea = [];
    let z = 1;
    while (z <= ActivityAreaA.length) {
      this.formErrors.Candidat[x - 1].Company[y - 1].ActivityArea.push({
        name: ''
      });
      let C = <FormGroup>ActivityAreaA.at(z - 1);
      for (let field in C.controls) {
        let input = C.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].Company[y - 1].ActivityArea[z - 1][field] = this.validationMessages.Candidat.Company.ActivityArea[field][error];
          }
        }
      }
      z++;
    }
  }

  validateLangue(x: number) {
    console.log('validateLangue');
    let LangueA = (<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('Langue') as FormArray;
    this.formErrors.Candidat[x - 1].Langue = [];
    let y = 1;
    while (y <= LangueA.length) {
      this.formErrors.Candidat[x - 1].Langue.push({
        name: '',
        level: ''
      });
      let Y = <FormGroup>LangueA.at(y - 1);
      for (let field in Y.controls) {
        let input = Y.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].Langue[y - 1][field] = this.validationMessages.Candidat.Langue[field][error];
          }
        }
      }
      this.validateLangue(x);
      y++;
    }
  }

  validateLicense(x: number) {
    console.log('validateLicense');
    let LicenseA = (<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('License') as FormArray;
    this.formErrors.Candidat[x - 1].License = [];
    let y = 1;
    while (y <= LicenseA.length) {
      this.formErrors.Candidat[x - 1].License.push({
        name: '',
        date_obtention: '',
      });
      let Y = <FormGroup>LicenseA.at(y - 1);
      for (let field in Y.controls) {
        let input = Y.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].License[y - 1][field] = this.validationMessages.Candidat.License[field][error];
          }
        }
      }
      this.validateLicense(x);
      y++;
    }
  }

  submitForm() {
    this.candidatService.CreateCandidat(this.candidatForm.value).subscribe(res => {
      console.log('Candidat added!');
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    });
  }
}
