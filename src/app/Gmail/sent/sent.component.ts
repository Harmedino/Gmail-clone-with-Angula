import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  mail: any = [];

  star: any = [];
  index: any = '';
  check: any = '';
  constructor(
    private service: DetailserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get('detail');
    this.mail = this.service.details[this.index].sent;
    this.star = this.service.details[this.index].star;
    // alert(this.index);
  }
  del(index: any) {
    this.mail.splice(index, 1);
  }
  add(i: any) {
    this.mail[i].star
      ? ((this.mail[i].star = false), this.star.splice(i, 1))
      : ((this.mail[i].star = true), this.star.push(this.mail[i]));
  }
  archive(i: any) {}
}
