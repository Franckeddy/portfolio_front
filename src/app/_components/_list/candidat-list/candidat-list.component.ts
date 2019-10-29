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
  deleteCandidat(data: { issue_name: any; id: any; }){
    let index = this.CandidatsList.map((x: { issue_name: any; }) => {return x.issue_name}).indexOf(data.issue_name);
    return this.CandidatService.DeleteCandidat(data.id).subscribe(res => {
      this.CandidatsList.splice(index, 1)
      console.log('Candidat deleted!')
    })
  }

}
