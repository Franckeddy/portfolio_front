import { Component, OnInit } from '@angular/core';
import {Candidat} from "../../_models/Candidat.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CandidatsService} from "../../_services/candidats.service";

@Component({
  selector: 'app-single-candidat',
  templateUrl: 'single-candidat.component.html',
  styleUrls: ['single-candidat.component.scss']
})
export class SingleCandidatComponent implements OnInit {

  candidat: Candidat;

  constructor(
    private route: ActivatedRoute,
    private candidatsService: CandidatsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.candidat = new Candidat(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    const id = this.route.snapshot.params['id'];
    this.candidatsService.getSingleCandidat(+id).then(
      (candidat: Candidat) => {
        this.candidat = candidat;
      }
    );
  }
  onBack() {
    this.router.navigate(['/candidats'])
  }
}
