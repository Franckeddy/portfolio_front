import { Component, OnInit } from '@angular/core';
import { LangueService } from '../../../_services/langue.service';

@Component({
  selector: 'app-langue-list',
  templateUrl: './langue-list.component.html',
  styleUrls: ['./langue-list.component.scss']
})
export class LangueListComponent implements OnInit {

  langueList: any = [];

  ngOnInit() {
    this.loadLangues();
  }

  constructor(
    public langueService: LangueService
  ){ }

  // Langues list
  loadLangues() {
    return this.langueService.GetLangues().subscribe((data: {}) => {
      this.langueList = data;
    })
  }

}