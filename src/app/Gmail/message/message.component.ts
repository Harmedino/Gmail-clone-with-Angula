import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailserviceService } from 'src/app/service/detailservice.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor(
    private serve: DetailserviceService,
    private route: ActivatedRoute
  ) {}
  index: any = '';
  item: any = '';
  message: any = '';
  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get('detail'));
    this.item = Number(this.route.snapshot.paramMap.get('index'));
    // alert(this.index);
    this.message = this.serve.details[this.index].mail[this.item];
    console.log(this.serve.details[this.index].mail[this.item]);
  }
}
