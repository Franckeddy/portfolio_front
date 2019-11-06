import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../../_services/formation.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss']
})
export class FormationListComponent implements OnInit {

  FormationList: any = [];

  ngOnInit() {
    this.loadFormations();
  }

  constructor(
    public FormationService: FormationService
  ){ }

  // Formations list
  loadFormations() {
    return this.FormationService.GetFormations().subscribe((data: {}) => {
      this.FormationList = data;
    })
  }

}