using NotaRapida.Dominio.Modelos;
using System;
using System.Collections.Generic;

namespace NotaRapida.Dominio.Interfaces
{
    public interface IRepositorioNota
    {
        List<Nota> ObterTodos(DateTime? dataModificacao);
        Nota ObterPorId(int id);
        Nota Criar(Nota nota);
        void Atualizar(int id, string texto);
        void Remover(int id);
    }
}
