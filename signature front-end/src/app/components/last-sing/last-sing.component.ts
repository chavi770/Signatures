import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../service/group.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/signturePerson';

@Component({
  selector: 'app-last-sing',
  templateUrl: './last-sing.component.html',
  styleUrls: ['./last-sing.component.scss']
})
export class LastSingComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  lastSing: Observable<Person[]>;

  ngOnInit() {
    this.groupService.getListPerson();

    this.lastSing = this.groupService.listPerson$;
  }

}
