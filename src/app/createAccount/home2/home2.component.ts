import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component implements OnInit {
  index: any = '';
  constructor(private route: Router, private routee: ActivatedRoute) {}

  ngOnInit(): void {
    this.index = this.routee.snapshot.paramMap.get('index');
  }
  number: any = '';
  touch: any = false;
  pattern = /[0]{1}[7-9]{1}[01]{1}[0-9]{8}/;
  check = this.pattern.test(this.number);
  next() {
    if (this.number) {

      this.route.navigate([`/verify/${this.index}`]);
      return;
    } else {
      this.touch = true;
    }
  }
}
