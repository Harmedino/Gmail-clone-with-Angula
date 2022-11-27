import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  constructor(private routr: Router, private router: ActivatedRoute) {}
  index: any = '';
  auth:any= ''
  ngOnInit(): void {
    this.index = this.router.snapshot.paramMap.get('index');
  }

  agree() {
    this.routr.navigate([`/gmail/${this.index}/mail`]);
    localStorage.setItem('guard1', JSON.stringify(this.auth = true));
  }
}
