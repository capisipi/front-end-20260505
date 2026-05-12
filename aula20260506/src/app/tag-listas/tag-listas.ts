import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {
  minhaString: string = "paulo"; //isto é um string
  
  //isto é um array de string, ou um prédio de string na memoria, 
  // atenção nunca poderia fazer string [] = "paulo", ia dar erro porque um array (prédio), não cabe dentro de um string"" só
  minhaLista: string[] = [
    "catarina", 
    "samanta", 
    "leonardo", 
    "jose",
    this.minhaString,
  ];
 // o string recebe "x", se puser outro elemento como 1 ou false, vá dar erros.
 // minha lista de any, não é comum usar o any, e ele desliga o Typescript
 minhalistaJS: any [] = [
  "catarina",
  1, false,
 ]
}
