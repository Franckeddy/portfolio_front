import {Component, OnDestroy, OnInit} from '@angular/core';
import {CandidatService} from "../../../_services/candidats.service";

@Component({
  selector: 'app-candidat-list',
  templateUrl: 'candidat-list.component.html',
  styleUrls: ['candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {

  CandidatsList: any = [];

  ngOnInit() {
    this.loadCandidats();
  }

  constructor(
    public CandidatService: CandidatService
  ){ }

  // Candidats list
  loadCandidats() {
    return this.CandidatService.GetCandidats().subscribe((data: {}) => {
      this.CandidatsList = data;
    })
  }

  // Delete candidat
  deleteCandidat(data){
    let index = this.CandidatsList.map(x => {return x.issue_name}).indexOf(data.issue_name);
    return this.CandidatService.DeleteCandidat(data.id).subscribe(res => {
      this.CandidatsList.splice(index, 1)
      console.log('Candidat deleted!')
    })
  }

}
