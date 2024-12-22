using System;

namespace NotaRapida.Dominio.Modelos
{
    public class Nota
    {
        public int? Id { get; set; }
        public string Texto { get; set; }
        public DateTime DataModificacao { get; set; } = DateTime.Now;
    }
}
