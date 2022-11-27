import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router, RouterOutlet } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  password = 'password';
  match: any = false;
  disable = true;
  signup: any = [];
  data: any = '';
  select = false;
  com: any = '@gmail.com';
  check: any = '';
  exist = false;
  constructor(
    private fd: FormBuilder,
    private route: Router,
    private service: DetailserviceService
  ) {}

  form = this.fd.group({
    fName: ['', [Validators.required]],
    lName: ['', [Validators.required]],
    uName: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z0-9!&*+-]{10,100}$')],
    ],
    pass1: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z0-9!&*+-@]{8,100}$')],
    ],
    pass2: ['', [Validators.required]],
  });

  get fName() {
    return this.form.get('fName');
  }
  get lName() {
    return this.form.get('lName');
  }
  get uName() {
    return this.form.get('uName');
  }
  get pass1() {
    return this.form.get('pass1');
  }
  get pass2() {
    return this.form.get('pass2');
  }
  ngOnInit(): void {
    this.signup = this.service.details;
  }

  show() {
    this.password == 'password'
      ? (this.password = 'text')
      : (this.password = 'password');
  }
  seen = false;
  next() {
    this.select = true;
    let { fName, lName, uName, pass1, pass2 } = this.form.value;

    if (pass1 != pass2) {
      this.match = true;
      this.select = false;
      return;
    } else if (this.signup != 0) {
      for (let index = 0; index < this.service.details.length; index++) {
        if (uName + this.com == this.signup[index].userName) {
          this.seen = true;
          this.exist = true;

          setTimeout(() => {
            this.seen = false;
          }, 500);
          setTimeout(() => {
            this.select = false;
          }, 5000);
        } else if (
          index == this.service.details.length - 1 &&
          this.seen == false &&
          this.exist == false
        ) {
          this.exist = false;
          this.data = {
            firstName: fName,
            lastName: lName,
            userName: uName + '@gmail.com',
            password: pass1,
            star: [],
            mail: [],
            sent: [],
          };
          this.service.details.push(this.data);
          // this.service.auth == true;
          localStorage.setItem('myarray', JSON.stringify(this.service.details));
          setTimeout(() => {
            this.select = false;
            this.route.navigate([`/stage2/${index + 1}`]);
          }, 7000);
          return;
        }
      }
    } else {
      this.select = true;
      this.data = {
        firstName: fName,
        lastName: lName,
        userName: uName + '@gmail.com',
        password: pass1,
        star: [],
        mail: [],
        sent: [],
      };
      this.service.details.push(this.data);
      // this.service.auth == true;
      localStorage.setItem('myarray', JSON.stringify(this.service.details));
      setTimeout(() => {
        this.select = false;
        this.route.navigate([`/stage2/${0}`]);
      }, 5000);
    }
  }
}
