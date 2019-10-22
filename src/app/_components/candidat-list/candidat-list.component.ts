import {Component, OnDestroy, OnInit} from '@angular/core';
import {Candidat} from "../../_models/Candidat.model";
import {Subscription} from "rxjs";
import {CandidatsService} from "../../_services/candidats.service";
import {Router} from "@angular/router";
import {identifierName} from "@angular/compiler";

@Component({
  selector: 'app-candidat-list',
  templateUrl: 'candidat-list.component.html',
  styleUrls: ['candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit, OnDestroy {

  candidats: Candidat[];
  candidatsSubscription: Subscription;

  constructor(
    private candidatsServcice: CandidatsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.candidatsSubscription = this.candidatsServcice.candidatsSubject.subscribe(
      (candidats: Candidat[]) => {
        this.candidats = candidats;
      }
    );
    //this.candidatsServcice.getCandidats();
    this.candidatsServcice.emitCandidats();
  }

  onNewCandidat() {
    this.router.navigate(['/candidats', 'new'])
  }

  onDeleteCandidat(candidat: Candidat) {
    this.candidatsServcice.removeCandidat(candidat);
  }

  onViewCandidat(id: number) {
    this.router.navigate(['/candidats', 'view', id])
  }

  ngOnDestroy() {
    this.candidatsSubscription.unsubscribe();
  }
}
