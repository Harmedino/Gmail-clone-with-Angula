import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
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
    this.mail = this.service.details[this.index].mail;
    this.star = this.service.details[this.index].star;
  }
  del(index: any) {
    this.mail.splice(index, 1);
    localStorage.setItem('myarray', JSON.stringify(this.service.details));
  }
  add(i: any) {
    this.mail[i].star
      ? ((this.mail[i].star = false), this.star.splice(i, 1))
      : ((this.mail[i].star = true), this.star.push(this.mail[i]));

    localStorage.setItem('myarray', JSON.stringify(this.service.details));
  }
  archive(i: any) {}
}
