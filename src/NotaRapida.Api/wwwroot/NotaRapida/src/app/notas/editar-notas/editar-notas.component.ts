import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NotaRapidaService } from '../../servicos/nota-rapida.service';
import { NgIf } from '@angular/common';
import { ModalMensagemComponent } from '../../modal-mensagem/modal-mensagem.component';

const ROTA_LISTA = "/listarNotas";

@Component({
  selector: 'app-editar-notas',
  standalone: true,
  imports: [RouterModule, FormsModule, NgIf, ModalMensagemComponent],
  templateUrl: './editar-notas.component.html',
  styleUrl: './editar-notas.component.css'
})

export class EditarNotasComponent implements OnInit {

  nota: Nota = { texto: "" }
  exibirModal: boolean = false;
  mensagemModal: string = "";
  tituloModal: string = "";

  constructor(private service: NotaRapidaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const parametroId = "id";
    const id = this.route.snapshot.paramMap.get(parametroId);
    this.service.obterPorId(parseInt(id!)).subscribe((nota) => {
      this.nota = nota
    })
  }

  aoClicarEmSalvar() {
    if (!this.nota.texto!.trim()) {
      const mensagem = "O campo deve ser preenchido.";
      this.exibirMensagemErro(mensagem);
      return;
    }
    this.atualizarNota();
  }

  private atualizarNota(): void {
    const mensagem = "Nota atualizada com sucesso!";
    this.service.atualizarNota(this.nota.id!, this.nota.texto!).subscribe({
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
    const mensagem = "Erro ao atualizar nota:";
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
