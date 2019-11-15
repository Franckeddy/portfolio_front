import {Component, Input, OnInit} from '@angular/core';
import {CandidatService} from "../../../_services/candidats.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../../../_models/Candidat.model';

@Component({
  selector: 'app-candidat-list',
  templateUrl: 'candidat-list.component.html',
  styleUrls: ['candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {

  @Input('data') candidats: string[] = [];
  page: number = 1;

  CandidatsList: any = [];
  candidat: Candidat;
  id: string;

  ngOnInit() {
    this.loadCandidats();
    this.id = this.route.snapshot.params['id'];
    this.CandidatService.GetCandidat(this.id)
      .subscribe((data: Candidat) => {
        console.log(data)
        this.candidat = data;
      }, error => console.log(error));
  }

  constructor(
    public CandidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router,
  ){ }

  // Candidats list
  loadCandidats() {
    return this.CandidatService.GetCandidats().subscribe((data: {}) => {
      this.CandidatsList = data;
    })
  }

  deleteCandidat(candidat_name, i) {
    if (window.confirm('Are you sure?')) {
      this.CandidatService.DeleteCandidat(candidat_name._id)
        .subscribe((res) => {
          this.CandidatsList.splice(i, 1);
        }
        )
    }
  }

}
