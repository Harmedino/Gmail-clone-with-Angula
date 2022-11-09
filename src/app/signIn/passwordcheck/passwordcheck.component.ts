import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-passwordcheck',
  templateUrl: './passwordcheck.component.html',
  styleUrls: ['./passwordcheck.component.scss'],
})
export class PasswordcheckComponent implements OnInit {
  pass: any = '';
  email: any = '';
  name: any = '';
  index: any = '';
  password = 'password';
  mailarrY: any = [];
  select = false;
  error = false;
  constructor(
    private routee: ActivatedRoute,
    private route: Router,
    private service: DetailserviceService
  ) {}

  ngOnInit(): void {
    this.mailarrY = this.service.details;
    this.email =
      this.mailarrY[Number(this.routee.snapshot.paramMap.get('mail'))].userName;
    this.name =
      this.mailarrY[
        Number(this.routee.snapshot.paramMap.get('mail'))
      ].firstName;

    this.index = this.routee.snapshot.paramMap.get('mail');
  }

  show() {
    this.password == 'password'
      ? (this.password = 'text')
      : (this.password = 'password');
  }

  check() {
    if (this.pass == this.mailarrY[this.index].password) {
      this.error = false;
      this.select = true;
      this.service.auth = true;

      setTimeout(() => {
        this.select = false;
        this.route.navigate([`/gmail/${this.index}/mail`]);
      }, 5000);
    } else {
      this.error = true;
    }
  }
}
