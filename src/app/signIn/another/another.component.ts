import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss'],
})
export class AnotherComponent implements OnInit {
  email: any = '';
  select = false;
  mailarrY: any = [];
  constructor(private route: Router, private service: DetailserviceService) {}

  ngOnInit(): void {
    this.mailarrY = this.service.details;
  }
  seen = false;

  check() {
    for (let index = 0; index < this.mailarrY.length; index++) {
      if (this.email == this.mailarrY[index].userName) {
        alert('true');
        this.seen = true;
        this.route.navigate([`password/${index}`]);
        setTimeout(() => {
          this.seen = false;
        }, 500);
      } else if (index == this.mailarrY.length - 1 && this.seen == false) {
        alert('false');
      }
    }
  }
}
