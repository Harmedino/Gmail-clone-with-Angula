import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  index: any = '';
  list: any = ['mail', 'starred'];
  mail: any = '';
  star: any = '';
  sent: any = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DetailserviceService
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get('detail');
    // this.mail = this.service.details[this.index].mail.length;
    // this.star = this.service.details[this.index].star.length;
    // this.sent = this.service.details[this.index].sent.length;
    // alert(this.index);
  }
  compose() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { compose: 'new' },
      queryParamsHandling: 'merge',
    });
  }
}
