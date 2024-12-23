import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotaRapidaService } from '../../servicos/nota-rapida.service';
import { Nota } from '../nota';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-notas',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './criar-notas.component.html',
  styleUrl: './criar-notas.component.css'
})
export class CriarNotasComponent {

  nota: Nota = {texto: ""}
  constructor(private service: NotaRapidaService, private router: Router) { }

  aoClicarEmSalvar() {// colocar mensagem de confirmação e depois navegar
    this.service.criarNota(this.nota).subscribe({
      next: (res) => {
        console.log('Nota criada com sucesso:', res);
        this.router.navigate(['/listarNotas']);
      },
      error: (err) => {
        console.error('Erro ao criar a nota:', err);
      }
    });
  }
}
