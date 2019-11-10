import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/_services/candidats.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.scss']
})
export class EditCandidatComponent implements OnInit {

  CandidatList: any = [];
  updateCandidatForm: FormGroup;

  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,    
    public bugService: CandidatService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.GetCandidat(id).subscribe((data) => {
      this.updateCandidatForm = this.fb.group({
        firstname: [data.firstname],
        lastname: [data.lastname],
        // adress: [data.adress],
        // town: [data.town],
        // zipcode: [data.zipcode],
        // email: [data.email],
        // date_of_birth: [data.date_of_birth],
      })
    })
  }

  updateForm(){
    this.updateCandidatForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      // adress: [''],
      // town: [''],
      // zipcode: [''],
      // email: [''],
      // date_of_birth: [''],
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.UpdateCandidat(id, this.updateCandidatForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/candidats-list'))
    })
  }

}