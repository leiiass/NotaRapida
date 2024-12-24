import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NotaRapidaService } from '../../servicos/nota-rapida.service';

const ROTA_LISTA = "/listarNotas";

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
    const parametroId = "id";
    const id = this.route.snapshot.paramMap.get(parametroId);
    this.service.obterPorId(parseInt(id!)).subscribe((nota) => {
      this.nota = nota
    })
  }

  aoClicarEmRemover() {
    this.service.removerNota(this.nota.id!).subscribe({
      next: () => this.router.navigate([ROTA_LISTA])
    });
  }

  aoClicarEmCancelar() {
    this.router.navigate([ROTA_LISTA])
  }

}
