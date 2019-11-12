import {Component, Input, OnInit} from '@angular/core';
import {CandidatService} from "../../../_services/candidats.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidat-list',
  templateUrl: 'candidat-list.component.html',
  styleUrls: ['candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {

  @Input('data') candidats: string[] = [];
  page: number = 1;

  CandidatsList: any = [];

  ngOnInit() {
    this.loadCandidats();
  }

  constructor(
    public CandidatService: CandidatService,
    public route: ActivatedRoute
  ){ }

  // Candidats list
  loadCandidats() {
    return this.CandidatService.GetCandidats().subscribe((data: {}) => {
      this.CandidatsList = data;
    })
  }

  // Delete candidat
  deleteCandidat(data: { candidat_name: any; id: any; }){
    let index = this.CandidatsList.map((x: { candidat_name: any; }) => {return x.candidat_name}).indexOf(data.candidat_name);
    return this.CandidatService.DeleteCandidat(data.id).subscribe(res => {
      this.CandidatsList.splice(index, 1)
      console.log('Candidat deleted!')
    })
  }

}
