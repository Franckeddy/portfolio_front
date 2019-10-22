import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CandidatsService} from "../../_services/candidats.service";
import {Router} from "@angular/router";
import {Candidat} from "../../_models/Candidat.model";

@Component({
  selector: 'app-candidat-form',
  templateUrl: 'candidat-form.component.html',
  styleUrls: ['candidat-form.component.scss']
})
export class CandidatFormComponent implements OnInit {

  candidatForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private candidatsService: CandidatsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.candidatForm = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        adress: ['', Validators],
        town: ['', Validators],
        zipcode:['', Validators],
        email: ['', Validators],
        date_of_birth: ['', Validators],
        langues: ['', Validators],
        licenses: ['', Validators],
        schools: ['', Validators],
        companies: ['', Validators],
      }
    );
  }
  onSaveCandidat() {
    const firstname = this.candidatForm.get('firstname').value;
    const lastname = this.candidatForm.get('lastname').value;
    const adress = this.candidatForm.get('adress').value;
    const town = this.candidatForm.get('town').value;
    const zipcode = this.candidatForm.get('zipcode').value;
    const email = this.candidatForm.get('email').value;
    const date_of_birth = this.candidatForm.get('date_of_birth').value;
    const langues = this.candidatForm.get('langues').value;
    const licenses = this.candidatForm.get('licenses').value;
    const schools = this.candidatForm.get('schools').value;
    const companies = this.candidatForm.get('companies').value;

    const newCandidat = new Candidat(
      firstname,
      lastname,
      adress,
      town,
      zipcode,
      email,
      date_of_birth,
      langues,
      licenses,
      schools,
      companies,)
    this.candidatsService.createNewCandidat(newCandidat);
    this.router.navigate(['/candidats']);
  }
}
