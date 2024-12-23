import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotaComponent } from '../nota/nota.component';
import { NgFor } from '@angular/common';
import { NotaRapidaService } from '../../servicos/nota-rapida.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-notas',
  standalone: true,
  imports: [RouterModule, NotaComponent, NgFor, HttpClientModule, FormsModule ],
  templateUrl: './listar-notas.component.html',
  styleUrl: './listar-notas.component.css'
})
export class ListarNotasComponent implements OnInit{

  listarNotas: any[] = [];
  erro: string | null = null;
  dataFiltro: string | null = null;

  constructor(private notaRapidaService: NotaRapidaService) { }

  ngOnInit(): void {
    this.carregarNotas();
  }

  carregarNotas(): void {
    this.notaRapidaService.obterTodasNotas().subscribe({
      next: (notas) => (this.listarNotas = notas),
      error: (err) => (this.erro = 'Erro ao carregar as notas'),
    });
  }

  removerNota(id: number): void {
    this.notaRapidaService.removerNota(id).subscribe({
      next: () => this.carregarNotas(),
      error: () => (this.erro = 'Erro ao remover a nota')
    });
  }
}
