import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaStatica01 } from "./tabela-statica01/tabela-statica01";
import { TabelaStatica02 } from "./tabela-statica02/tabela-statica02";
import { FormularioStatico01 } from "./formulario-statico01/formulario-statico01";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabelaStatica01, TabelaStatica02, FormularioStatico01],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula04');
}
