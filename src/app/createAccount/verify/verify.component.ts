import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  index :any=''
  ngOnInit(): void {
   this.index = this.route.snapshot.paramMap.get('index')
  }

}
