import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss'],
})
export class HiComponent implements OnInit {
  hiCpn!: string;
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    // this.a = this._dataService.textFromHello;
    this._dataService.textFromHello$.subscribe((text) => (this.hiCpn = text));
    // console.log(this._dataService.textFromHello$);
  }
}
