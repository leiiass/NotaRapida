import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nota',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {

  @Input() nota = {
    id: 0,
    texto: "",
    dataModificacao: ""
  }
}
