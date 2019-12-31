import {Component, Input, OnInit, NgZone} from '@angular/core';
import {CandidatService} from "../../../services/candidats.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../../../models';

@Component({
  selector: 'app-candidat-list',
  templateUrl: 'candidat-list.component.html',
  styleUrls: ['candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {

  @Input('data')
  candidats: string[] = [];
  page: number = 1;
  CandidatsList: any = [];
  candidat: Candidat;
  id: string;

  ngOnInit() {
    this.loadCandidats();
    this.id = this.route.snapshot.params['id']; // onclick -> candidats{id}
    this.CandidatService.GetCandidat(this.id)
      .subscribe((data: Candidat) => {
        console.log(data);
        this.candidat = data;
      }, error => console.log(error));
  }

  constructor(
    public CandidatService: CandidatService,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
  ){ }

  // Candidats list
  loadCandidats() {
    return this.CandidatService.GetCandidats().subscribe((data: {}) => {
      this.CandidatsList = data;
    })
  }

// TODO redirection
  deleteCandidat() {
    if (window.confirm('Confirmez la suppression !')) {
      this.CandidatService.DeleteCandidat(this.id)
        .subscribe(res => {
            console.log('Candidat deleted!');
            this.ngZone.run(() => this.router.navigateByUrl('/'))
          }
        )
    }
  }
}
