import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent implements OnInit {
  name: any = '';
  index: any = '';
  email: any = '';
  myMonth: any = '';
  gender: any = '';
  day: any = '';
  year: any = '';
  input = false;
  input2 = true;
  sGender = false;
  constructor(
    private service: DetailserviceService,
    private route: ActivatedRoute,
    private routee: Router
  ) {}

  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get('index'));
    this.name = this.service.details[this.index].firstName;
    this.email = this.service.details[this.index].userName;
  }

  next() {
    if (
      this.myMonth != '' &&
      this.day != '' &&
      this.year != '' &&
      this.day < 31 &&
      this.year < 2022
    ) {
      if (this.gender != '') {
        this.input = false;
        this.input2 = true;
        this.routee.navigate([`/terms/${this.index}`]);
      } else {
        this.input = false;
        this.input2 = true;
        this.sGender = true;
      }
    } else {
      this.input = true;
      this.input2 = false;
      this.sGender = false;
    }
  }
}
