import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NotaRapidaService } from '../../servicos/nota-rapida.service';

@Component({
  selector: 'app-remover-notas',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './remover-notas.component.html',
  styleUrl: './remover-notas.component.css'
})
export class RemoverNotasComponent {
  nota: Nota = { texto: "" }
  constructor(private service: NotaRapidaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.obterPorId(parseInt(id!)).subscribe((nota) => {
      this.nota = nota
    })
  }

  aoClicarEmRemover() {
    this.service.removerNota(this.nota.id!).subscribe({
      next: (res) => {
        console.log('Nota removida com sucesso:', res);
        this.router.navigate(['/listarNotas']);
      },
      error: (err) => {
        console.error('Erro ao remover a nota:', err);
      }
    });
  }

  aoClicarEmCancelar() {
    this.router.navigate(['/listarNotas'])
  }

}
