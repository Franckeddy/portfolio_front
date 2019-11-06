import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/_services/activity.service';

@Component({
  selector: 'app-avtivity-add',
  templateUrl: './avtivity-add.component.html',
  styleUrls: ['./avtivity-add.component.scss']
})
export class AvtivityAddComponent implements OnInit {

  activityForm: FormGroup;
  activityArr: any = [];

  ngOnInit() {
    this.addActivity()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public activityService: ActivityService
  ){ }

  addActivity() {
    this.activityForm = this.fb.group({
      name: [''],
    })
  }

  submitForm() {
    this.activityService.CreateActivity(this.activityForm.value).subscribe(res => {
      console.log('Activity added!')
      this.ngZone.run(() => this.router.navigateByUrl('/activities-list'))
    });
  }
}
