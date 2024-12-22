using NotaRapida.Dominio.Interfaces;
using NotaRapida.Dominio.Modelos;
using System;
using System.Collections.Generic;

namespace NotaRapida.Servicos.Servicos
{
    public class ServicoNota
    {
        private readonly IRepositorioNota _repositorioNota;
        public ServicoNota(IRepositorioNota repositorioNota)
        {
            _repositorioNota = repositorioNota;
        }

        public List<Nota> ObterTodos(DateTime? dateTime)
        {
            var notas = _repositorioNota.ObterTodos(dateTime);
            return notas;
        }

        public Nota Criar(Nota nota)
        {
            return _repositorioNota.Criar(nota);
        }

        public void Atualizar(int id, string texto)
        {
            var notaAhSerAtualizada = _repositorioNota.ObterPorId(id);

            if (notaAhSerAtualizada != null)
            {
                notaAhSerAtualizada.Texto = texto;
            }

            _repositorioNota.Atualizar(id, texto);
        }

        public void Remover(int id)
        {
            _repositorioNota.Remover(id);
        }
    }
}
