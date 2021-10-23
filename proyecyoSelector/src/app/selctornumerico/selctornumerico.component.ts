import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selctornumerico',
  templateUrl: './selctornumerico.component.html',
  styleUrls: ['./selctornumerico.component.css']
})
export class SelctornumericoComponent implements OnInit {

  @Input() minimo!: number|string;
  @Input() maximo!: number|string;
  actual!: number;

  constructor() { }

  ngOnInit(): void {
    this.actual = Number(this.minimo);
  }

  incrementar() {
    if(this.actual < this.maximo) {
      this.actual++;
    }
  }

  decrementar() {
    if(this.actual > this.minimo) {
      this.actual--;
    }
  }

  fijar(v: number) {
    if(v >= this.minimo && v <= this.maximo){
      this.actual = v;
    }
  }

}
