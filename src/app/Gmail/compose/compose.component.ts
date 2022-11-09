import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  compose1: any = false;
  to: any = '';
  subject: any = '';
  body: any = '';
  index: any = '';
  data: any = '';
  name: any = '';
  userName: any = '';
  details: any = '';
  seen = false;
  mailSent = false;
  constructor(
    private routee: Router,
    private activate: ActivatedRoute,
    private service: DetailserviceService
  ) {}
  date = new Date();

  ngOnInit(): void {
    this.index = this.activate.snapshot.paramMap.get('detail');
    this.name = this.service.details[this.index].firstName;
    this.userName = this.service.details[this.index].userName;
    this.details = this.service.details;
  }

  close() {
    this.compose1 = false;
    this.routee.navigate([], { queryParams: { compose: null } });
  }
  send() {
    if (this.subject && this.to) {
      for (let i = 0; i < this.details.length; i++) {
        if (this.to == this.details[i].userName) {
          this.seen = true;
          this.mailSent = true;
          setTimeout(() => {
            this.mailSent = false;
          }, 1000);
          this.data = {
            From: this.name,
            To: this.to,
            body: this.body,
            subject: this.subject,
            star: false,
            date: this.date,
            mail: this.userName,
          };
          this.service.details[i].mail.push(this.data);
          // this.service.details[i].sent.push(this.data);
          localStorage.setItem('myarray', JSON.stringify(this.service.details));

          setTimeout(() => {
            this.seen = false;
          }, 500);
        } else if (i == this.details.length - 1 && this.seen == false) {
          alert('to does not exist ');
        }
      }
    } else {
      alert('Please specify at least one recipient');
    }
  }
  expand() {}
}
