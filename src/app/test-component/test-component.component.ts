import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponentComponent implements OnInit {

  @Input() gameName: string;
  @Input() imgUrl: string;
  @Input() inactive: boolean;

  constructor() {
    this.gameName = '';
    this.imgUrl = '';
    this.inactive = true;
  }

  ngOnInit(): void {
  }

}
