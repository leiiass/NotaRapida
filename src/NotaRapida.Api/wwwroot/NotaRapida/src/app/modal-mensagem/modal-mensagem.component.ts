import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-mensagem',
  standalone: true,
  imports: [],
  templateUrl: './modal-mensagem.component.html',
  styleUrl: './modal-mensagem.component.css'
})
export class ModalMensagemComponent {

  @Input() titulo: string = '';
  @Input() mensagem: string = '';
  @Input() botaoTexto: string = 'OK'; 

  @Output() fechar = new EventEmitter<void>();

  aoFechar() {
    this.fechar.emit();
  }
}
