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
  number: string = '';
  touch: any = false;
  numb: any = '';
  pattern = /[0]{1}[987]{1}[0]{1}[0-9]{8}/gi;
  check = this.pattern.test(String(this.numb));
  next() {
    // alert(this.number.toString().length);
    if (this.number) {
      this.route.navigate([`/verify/${this.index}`]);

      return;
    } else {
      alert(typeof this.numb);

      this.touch = true;
    }
  }
}
