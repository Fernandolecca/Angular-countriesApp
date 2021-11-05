import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output()
  public onBusquedaPais: EventEmitter<string> = new EventEmitter();
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();
  public debouncer: Subject<string> = new Subject();

  public termino: string = "";

  constructor() { }

  ngOnInit() {
    this.debouncer
    .pipe( debounceTime(1000))
    .subscribe( valor => {
      console.log(valor);
      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    this.onBusquedaPais.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }


}
