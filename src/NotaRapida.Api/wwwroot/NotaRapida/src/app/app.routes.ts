import { Routes } from '@angular/router';
import { CriarNotasComponent } from './notas/criar-notas/criar-notas.component';
import { ListarNotasComponent } from './notas/listar-notas/listar-notas.component';
import { RemoverNotasComponent } from './notas/remover-notas/remover-notas.component';
import { EditarNotasComponent } from './notas/editar-notas/editar-notas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarNotas',
        pathMatch: 'full'
      },
      {
        path: 'criarNota',
        component: CriarNotasComponent
      },
      {
        path: 'listarNotas',
        component: ListarNotasComponent
      },
      {
        path: 'notas/removerNotas/:id',
        component: RemoverNotasComponent
      },
      {
        path: 'notas/editarNotas/:id',
        component: EditarNotasComponent
      }
];
