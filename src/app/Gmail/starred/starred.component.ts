import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss'],
})
export class StarredComponent implements OnInit {
  constructor(
    private service: DetailserviceService,
    private route: ActivatedRoute
  ) {}
  mail: any = [];
  star: any = [];
  index: any = '';

  ngOnInit(): void {
    this.index = this.route.snapshot.params['detail'];
    this.star = this.service.details[this.index].star;
    this.mail = this.service.details[this.index].inbox;
    // alert(this.index);
  }
  del(index: any) {
    this.mail.splice(index, 1);
    this.star.splice(index, 1);
  }
  remove(i: number) {
    this.star[i]
      ? ((this.star[i].star = false),
        this.star.splice(i, 1),
        (this.mail[i].star = false))
      : (this.star[i].star = true);
    localStorage.setItem('myarray', JSON.stringify(this.service.details));
  }
  archive(i: any) {}
}
