import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //vetor
  vetor = [];

  //Reactive Forms
  formulario = new FormGroup({
  nome : new FormControl(''),
  tempo : new FormControl(''),
  valor : new FormControl('')
  })

  //Evento Adicionar
  adicionar(){
    // console.log(this.formulario.get("nome").value)
    this.vetor.push(this.formulario.value);
    //console.table(this.vetor);
    this.formulario.reset();
  }

  //Evento remover
  remover(i){
    this.vetor.splice(i,1);
  }

 }
