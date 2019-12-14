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
        this.initL()
      ]),
      'School': this.fb.array([
        this.initY()
      ]),
      'Company': this.fb.array([
        this.initC()
      ])
    });
  }

  initY() {
    return this.fb.group({
      //  ---------------------forms fields on y level ------------------------
      'Y1': ['Y1', [Validators.required, Validators.pattern('[0-9]{3}')]],
      'Y2': ['Y2', [Validators.required, Validators.pattern('[0-9]{3}')]],
      // ---------------------------------------------------------------------
      'Zs': this.fb.array([
        this.initZ()
      ])
    })
  }

  initZ() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      'Z': ['Z', [Validators.required, Validators.pattern('[0-9]{3}')]],
      // ---------------------------------------------------------------------
    })
  }

  initC() {
    return this.fb.group({
      //  ---------------------forms fields on y level ------------------------
      'C1': ['C1', [Validators.required, Validators.pattern('[0-9]{3}')]],
      'C2': ['C2', [Validators.required, Validators.pattern('[0-9]{3}')]],
      // ---------------------------------------------------------------------
      'Cs': this.fb.array([
        this.initD()
      ])
    })
  }

  initD() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      'D': ['D', [Validators.required, Validators.pattern('[0-9]{3}')]],
      // ---------------------------------------------------------------------
    })
  }

  initL() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      'L1': ['L1', [Validators.required, Validators.pattern('[0-9]{3}')]],
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

  addL(ix: number) {
    const control = (<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Langue') as FormArray;
    control.push(this.initL());
  }

  delL(index: number) {
    const arrayControl = (<FormArray>this.candidatForm.controls['Candidat']).at(index).get('Langue') as FormArray;
    arrayControl.removeAt(index);
  }

  addY(ix: number) {
    const control = (<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('School') as FormArray;
    control.push(this.initY());
  }

  delY(index: number) {
    const arrayControl = (<FormArray>this.candidatForm.controls['Candidat']).at(index).get('School') as FormArray;
    arrayControl.removeAt(index);
  }

  addZ(ix: number, iy: number) {
    const control = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('School') as FormArray).at(iy).get('Zs') as FormArray;
    control.push(this.initZ());
  }

  delZ(ix: number, iy: number): void {
    const arrayControl = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('School') as FormArray).at(iy).get('Zs') as FormArray;
    arrayControl.removeAt(ix);
  }

  addC(ix: number) {
    const control = (<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Company') as FormArray;
    control.push(this.initC());
  }

  delC(index: number) {
    const arrayControl = (<FormArray>this.candidatForm.controls['Candidat']).at(index).get('Company') as FormArray;
    arrayControl.removeAt(index);
  }

  addD(ix: number, iy: number): void {
    const control = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Company') as FormArray).at(iy).get('Cs') as FormArray;
    control.push(this.initD());
  }

  delD(ix: number, iy: number): void {
    const arrayControl = ((<FormArray>this.candidatForm.controls['Candidat']).at(ix).get('Company') as FormArray).at(iy).get('Cs') as FormArray;
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
      'Langue': this.SchoolErrors(),
      'School': this.SchoolErrors(),
      'Company': this.CompanyErrors()
    }]
  }

  SchoolErrors() {
    return [{
      //  ---------------------forms errors on y level ------------------------
      Y1: '',
      Y2: '',
      // ----------------------------------------------------------------------
      Zs: this.ZsErrors()
    }]
  }

  CompanyErrors() {
    return [{
      //  ---------------------forms errors on y level ------------------------
      C1: '',
      C2: '',
      // ----------------------------------------------------------------------
      Cs: this.CsErrors()
    }]
  }

  LangueErrors() {
    return [{
      //  ---------------------forms errors on y level ------------------------
      L1: '',
      // ----------------------------------------------------------------------
      Ls: this.LsErrors()
    }]
  }

  ZsErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      Z: ''
      // ---------------------------------------------------------------------
    }]
  }

  CsErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      C: ''
      // ---------------------------------------------------------------------
    }]
  }

  LsErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      L: ''
      // ---------------------------------------------------------------------
    }]
  }

  validationMessages = {
    Candidat: {
      firstname: {
        required: 'X is required.',
        pattern: 'X must be 3 characters long.'
      },
      lastname: {
        required: 'X is required.',
        pattern: 'X must be 3 characters long.'
      },
      town: {
        required: 'X is required.',
        pattern: 'X must be 3 characters long.'
      },
      zipcode: {
        required: 'X is required.',
        pattern: 'X must be 3 characters long.'
      },
      email: {
        required: 'X is required.',
        pattern: 'X must be 3 characters long.'
      },
      Langue: {
        L1: {
          required: 'L is required.',
          pattern: 'L must be 3 characters long.'
        },
        Ls: {
          L: {
            required: 'Z is required.',
            pattern: 'Z must be 3 characters long.'
          }
        }
      },
      School: {
        Y1: {
          required: 'Y1 is required.',
          pattern: 'Y1 must be 3 characters long.'
        },
        Y2: {
          required: 'Y2 is required.',
          pattern: 'Y2 must be 3 characters long.'
        },
        Zs: {
          Z: {
            required: 'Z is required.',
            pattern: 'Z must be 3 characters long.'
          }
        }
      },
      Company: {
        C1: {
          required: 'Y1 is required.',
          pattern: 'Y1 must be 3 characters long.'
        },
        C2: {
          required: 'Y2 is required.',
          pattern: 'Y2 must be 3 characters long.'
        },
        Cs: {
          C: {
            required: 'Z is required.',
            pattern: 'Z must be 3 characters long.'
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
          Y1: '',
          Y2: '',
          Zs: [{
            Z: ''
          }]
        }],
        Company: [{
          C1: '',
          C2: '',
          Cs: [{
            C: ''
          }]
        }],
        Langue: [{
          Y1: '',
          Y2: '',
          Zs: [{
            Z: ''
          }]
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
        Y1: '',
        Y2: '',
        Zs: [{
          Z: ''
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
      this.validateZs(x, y);
      y++;
    }
  }

  validateZs(x, y) {
    console.log('validateZs--');
    let ZsA = ((<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('School') as FormArray).at(y - 1).get('Zs') as FormArray;
    this.formErrors.Candidat[x - 1].School[y - 1].Zs = [];
    let z = 1;
    while (z <= ZsA.length) {
      this.formErrors.Candidat[x - 1].School[y - 1].Zs.push({
        Z: ''
      });
      let Z = <FormGroup>ZsA.at(z - 1);
      for (let field in Z.controls) {
        let input = Z.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].School[y - 1].Zs[z - 1][field] = this.validationMessages.Candidat.School.Zs[field][error];
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
        C1: '',
        C2: '',
        Cs: [{
          C: ''
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
      this.validateCs(x, y);
      y++;
    }
  }

  validateCs(x, y) {
    console.log('validateCs--');
    let CsA = ((<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('Company') as FormArray).at(y - 1).get('Cs') as FormArray;
    this.formErrors.Candidat[x - 1].Company[y - 1].Cs = [];
    let z = 1;
    while (z <= CsA.length) {
      this.formErrors.Candidat[x - 1].Company[y - 1].Cs.push({
        C: ''
      });
      let C = <FormGroup>CsA.at(z - 1);
      for (let field in C.controls) {
        let input = C.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].Company[y - 1].Cs[z - 1][field] = this.validationMessages.Candidat.Company.Cs[field][error];
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
        Y1: '',
        Y2: '',
        Zs: [{
          Z: ''
        }]
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
      this.validateCs(x, y);
      y++;
    }
  }

  validateLs(x, y) {
    console.log('validateLs--');
    let LsA = ((<FormArray>this.candidatForm.controls['Candidat']).at(x - 1).get('Langue') as FormArray).at(y - 1).get('Ls') as FormArray;
    this.formErrors.Candidat[x - 1].Langue[y - 1].Zs = [];
    let z = 1;
    while (z <= LsA.length) {
      this.formErrors.Candidat[x - 1].Langue[y - 1].Zs.push({
        Z: ''
      });
      let L = <FormGroup>LsA.at(z - 1);
      for (let field in L.controls) {
        let input = L.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Candidat[x - 1].Langue[y - 1].Zs[z - 1][field] = this.validationMessages.Candidat.Langue.Ls[field][error];
          }
        }
      }
      z++;
    }
  }

  submitForm() {
    this.candidatService.CreateCandidat(this.candidatForm.value).subscribe(res => {
      console.log('Candidat added!');
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    });
  }
}
