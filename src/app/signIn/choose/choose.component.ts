import { Component, OnInit } from '@angular/core';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss'],
})
export class ChooseComponent implements OnInit {
  list: any = [];
  constructor(private service: DetailserviceService) {}

  ngOnInit(): void {
    this.list = this.service.details;
    console.log(this.list);
  }
}
