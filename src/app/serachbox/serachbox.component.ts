import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-serachbox',
  templateUrl: './serachbox.component.html',
  styleUrls: ['./serachbox.component.css'],
})
export class SerachboxComponent implements OnInit {
  constructor() {}
  term = '';
  @Output() searchEmit = new EventEmitter<string>();
  serach_f(event: any) {
    event.preventDefault();
    this.searchEmit.emit(this.term);
  }
  ngOnInit(): void {}
}
