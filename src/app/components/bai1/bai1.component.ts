import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css'],
})
export class Bai1Component implements OnInit {
  constructor() {}
  input!: number;
  output!: number;
  ngOnInit(): void {}
  calEx() {
    this.output = 0;
    for (let i = 0; i < this.input; i++) {
      this.output = this.output + i / this.input;
    }
    // console.log(this.output);
    // console.log(this.input);
  }
}
