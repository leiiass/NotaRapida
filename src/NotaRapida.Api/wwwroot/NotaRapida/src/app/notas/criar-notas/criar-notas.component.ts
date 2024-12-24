import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotaRapidaService } from '../../servicos/nota-rapida.service';
import { Nota } from '../nota';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ModalMensagemComponent } from '../../modal-mensagem/modal-mensagem.component';

const ROTA_LISTA = "/listarNotas";

@Component({
  selector: 'app-criar-notas',
  standalone: true,
  imports: [RouterModule, FormsModule, NgIf, ModalMensagemComponent],
  templateUrl: './criar-notas.component.html',
  styleUrl: './criar-notas.component.css'
})
export class CriarNotasComponent {

  nota: Nota = { texto: "" }
  exibirModal: boolean = false;
  mensagemModal: string = '';
  tituloModal: string = '';

  constructor(private service: NotaRapidaService, private router: Router) { }

  aoClicarEmSalvar() {
    if (!this.nota.texto!.trim()) {
      const mensagem = "O campo deve ser preenchido.";
      this.exibirMensagemErro(mensagem);
      return;
    }
    this.criarNota();
  }

  private criarNota(): void {
    const mensagem = "Nota salva com sucesso!";
    this.service.criarNota(this.nota).subscribe({
      next: () => this.exibirMensagemSucesso(mensagem),
      error: (err) => this.tratarErroAtualizacao(err),
    });
  }

  private exibirMensagemSucesso(mensagem: string) {
    const tituloModal = "Sucesso";
    this.tituloModal = tituloModal;
    this.mensagemModal = mensagem;
    this.exibirModal = true;
  }

  private exibirMensagemErro(mensagem: string) {
    const tituloModal = "Erro";
    this.tituloModal = tituloModal;
    this.mensagemModal = mensagem;
    this.exibirModal = true;
  }

  private tratarErroAtualizacao(erro: any) {
    const mensagem = "Erro ao criar nota:";
    console.error(mensagem, erro);
  }

  aoClicarEmCancelar() {
    this.router.navigate([ROTA_LISTA])
  }

  fecharModal() {
    const tituloSucesso = "Sucesso";
    this.exibirModal = false;

    if (this.tituloModal === tituloSucesso) {
      this.router.navigate([ROTA_LISTA]);
    }
  }
}
