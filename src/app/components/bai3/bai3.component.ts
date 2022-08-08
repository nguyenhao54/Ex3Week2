import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css'],
})
export class Bai3Component implements OnInit {
  constructor() {}
  input!: string;
  output!: string;
  inputarr!: string[];
  ngOnInit(): void {}
  convert() {
    console.log(this.input);
    this.inputarr = this.input.toString().split('');

    const output = document.getElementById('output');
    for (let i = 1; i < this.inputarr.length; i++) {
      if (
        parseInt(this.inputarr[i]) % 2 == 0 &&
        parseInt(this.inputarr[i + 1]) % 2 == 0
      )
        this.inputarr[i] = this.inputarr[i] + '-';
    }
    this.output = this.inputarr.join('');
  }
}
