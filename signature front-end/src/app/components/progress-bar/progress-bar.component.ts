import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../service/group.service';
import { Observable } from 'rxjs';
import { Person } from '../../model/signturePerson'
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  countOfSing: Observable<Person[]>;


  constructor(private groupService: GroupService) { }

  ngOnInit() {

    this.groupService.getListPerson();

    this.countOfSing = this.groupService.listPerson$;
  }
}


