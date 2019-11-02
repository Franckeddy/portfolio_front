import { Component } from '@angular/core';
import { CandidatListComponent } from '../_list/candidat-list/candidat-list.component';

@Component({
  selector: 'app-single-candidat',
  templateUrl: 'single-candidat.component.html',
  styleUrls: ['single-candidat.component.scss']
})
export class SingleCandidatComponent extends CandidatListComponent {

  // candidat: Candidat;

  // constructor(
  //   private route: ActivatedRoute,
  //   private candidatService: CandidatService,
  //   private router: Router
  // ) { }

  // ngOnInit() {
  //   // this.candidat = new Candidat(
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   ''
  //   // );
  //   // const id = this.route.snapshot.params['id'];
  //   // this.candidatsService.getSingleCandidat(+id).then(
  //   //   (candidat: Candidat) => {
  //   //     this.candidat = candidat;
  //   //   }
  //   // );
  // }
  // onBack() {
  //   this.router.navigate(['/candidats'])
  // }
}
