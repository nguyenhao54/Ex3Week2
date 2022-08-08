import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css'],
})
export class Bai2Component implements OnInit {
  constructor() {}
  input1!: string;
  input2!: string;
  matchedStudents: { code: string; name: string; address: string }[] = [];
  notMatchedStudents: { code: string; address: string }[] = [];

  ngOnInit(): void {}
  handleEvent(e: any): void {
    e.preventDefault();
    const input1Data = this.input1!.split('; ');
    const input2Data = this.input2!.split('; ');
    const input1Students = input1Data.map((el) => {
      const splitedData = el.split(', '); // trả về mảng chứa thông tin sinh viên mssv, tên
      return { code: splitedData[0], name: splitedData[1] };
    });
    //mảng các object student

    input2Data.forEach((el) => {
      const splitedData: string[] = el.split(', ');
      const code: string = splitedData[0];
      const address = splitedData[1];
      // tìm trong mảng 1 xem có mã sv đó ko
      const student = input1Students.find((s) => s.code === code);
      if (student) {
        // if find then push in match
        this.matchedStudents.push({ code, name: student.name, address });
      } else {
        this.notMatchedStudents.push({ code, address });
      }
    });
  }
}
