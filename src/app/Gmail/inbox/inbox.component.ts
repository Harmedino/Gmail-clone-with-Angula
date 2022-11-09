import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  paramsSubscribtion: any;
  click = false;
  click2 = false;
  expression = '';
  index: any = '';
  name: any = '';
  username: any = '';
  compose1: any = false;
  widthr: any = '450px';
  height: any = '410px';
  hexcolor: any = '#';
  color: any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  getRandom() {
    return Math.floor(Math.random() * this.color.length);
  }

  constructor(
    private route: ActivatedRoute,
    private routee: Router,
    private service: DetailserviceService
  ) {}

  ngOnInit(): void {
    for (let index = 0; index < 6; index++) {
      this.hexcolor += this.color[this.getRandom()];
    }

    this.index = Number(this.route.snapshot.paramMap.get('detail'));

    this.paramsSubscribtion = this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.compose1 = queryParams['compose'] === 'new' ? true : false;
      }
    );
    this.name = this.service.details[this.index].firstName;
    this.username = this.service.details[this.index].userName;
  }

  ngOnDestroy() {
    this.service.auth = false;
    this.routee.navigate(['/choose']);
  }

  show() {
    this.click = true ? this.click == false : this.click == true;
  }
  show2() {
    this.click2 = true ? this.click2 == false : this.click2 == true;
  }
  out() {
    this.service.auth = false;
    this.routee.navigate(['/choose']);
  }
  expand() {
    // alert(this.width);

    this.widthr == '450px' ? (this.widthr = '1150px') : (this.widthr = '450px');
    this.height == '410px' ? (this.height = '600px') : (this.height = '410px');

    // alert(this.widthr);
  }
  mini() {
    // this.widthr == '450px' ||'1150' ? (this.widthr = '450px') : (this.widthr = '450px');
    this.height == '410px' || '600px'
      ? (this.height = '60px')
      : (this.height = '410px' || '600px');
  }

  close() {
    this.compose1 = false;
    this.routee.navigate([], { queryParams: { compose: null } });
  }
}
