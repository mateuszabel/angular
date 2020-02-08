import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//VARIAVEL
mensagem = "Aprendendo Angular";
exibir = false;

//vetor
vetor = ["Ana", "Beatriz", "Cleber", "Danilo", "Ellen"];

//função
quadrado(){
    this.exibir = !this.exibir;
}

}
