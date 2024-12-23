import { Component, OnInit  } from '@angular/core';
import { Nota } from '../nota';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute  } from '@angular/router';
import { NotaRapidaService } from '../../servicos/nota-rapida.service';

@Component({
  selector: 'app-editar-notas',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './editar-notas.component.html',
  styleUrl: './editar-notas.component.css'
})
export class EditarNotasComponent implements OnInit{

  nota: Nota = {texto: ""}
  constructor(private service: NotaRapidaService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.obterPorId(parseInt(id!)).subscribe((nota) => {
      this.nota = nota
    })
  }

  aoClicarEmSalvar() {
    this.service.atualizarNota(this.nota.id!, this.nota.texto!).subscribe({
      next: (res) => {
        console.log('Nota atualizada com sucesso:', res);
        this.router.navigate(['/listarNotas']);
      },
      error: (err) => {
        console.error('Erro ao atualizar a nota:', err);
      }
    });
  }

  aoClicarEmCancelar() {
    this.router.navigate(['/listarNotas'])
  }
}
