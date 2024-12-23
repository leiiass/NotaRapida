using NotaRapida.Dominio.Interfaces;
using NotaRapida.Dominio.Modelos;
using NotaRapida.Infraestrutura.BancoDeDados;
using System;
using System.Collections.Generic;
using System.Data.SQLite;

namespace NotaRapida.Infraestrutura.Repositorios
{
    public class RepositorioNota : IRepositorioNota
    {
        private readonly GerenciadorBancoDeDados _gerenciadorBancoDeDados;
        public RepositorioNota(GerenciadorBancoDeDados gerenciadorBancoDeDados)
        {
            _gerenciadorBancoDeDados = gerenciadorBancoDeDados;
        }

        public List<Nota> ObterTodos()
        {
            var notas = new List<Nota>();

            using (var conexao = _gerenciadorBancoDeDados.CriarConexao())
            {
                conexao.Open();

                string query = "SELECT * FROM TB01";

                query += " ORDER BY col_dt DESC LIMIT 10";

                using (var comando = new SQLiteCommand(query, conexao))
                {
                    using (var reader = comando.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            notas.Add(new Nota
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Texto = reader.GetString(reader.GetOrdinal("col_texto")),
                                DataModificacao = reader.GetDateTime(reader.GetOrdinal("col_dt"))
                            });
                        }
                    }
                }
            }

            return notas;
        }


        public Nota ObterPorId(int id)
        {
            using (var conexao = _gerenciadorBancoDeDados.CriarConexao())
            {
                conexao.Open();

                string query = "SELECT * FROM TB01 WHERE Id = @Id";
                using (var comando = new SQLiteCommand(query, conexao))
                {
                    comando.Parameters.AddWithValue("@Id", id);

                    using (var reader = comando.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return new Nota
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Texto = reader.GetString(reader.GetOrdinal("col_texto")),
                                DataModificacao = reader.GetDateTime(reader.GetOrdinal("col_dt"))
                            };
                        }
                    }
                }
            }

            throw new Exception($"Nota com ID {id} não foi encontrada.");
        }



        public Nota Criar(Nota nota)
        {
            using (var conexao = _gerenciadorBancoDeDados.CriarConexao())
            {
                conexao.Open();

                string query = "INSERT INTO TB01 (col_texto, col_dt) VALUES (@Texto, @Data)";
                using (var comando = new SQLiteCommand(query, conexao))
                {
                    comando.Parameters.AddWithValue("@Texto", nota.Texto);
                    comando.Parameters.AddWithValue("@Data", new DateTime(2024, 12, 20));
                    comando.ExecuteNonQuery();
                }

                string idQuery = "SELECT last_insert_rowid()";
                using (var comando = new SQLiteCommand(idQuery, conexao))
                {
                    long id = (long)comando.ExecuteScalar();
                    nota.Id = (int)id;
                }
            }

            return nota;
        }


        public void Atualizar(int id, string texto)
        {
            using (var conexao = _gerenciadorBancoDeDados.CriarConexao())
            {
                conexao.Open();

                string query = "UPDATE TB01 SET col_texto = @Texto, col_dt = @Data WHERE ID = @Id";
                using (var comando = new SQLiteCommand(query, conexao))
                {
                    comando.Parameters.AddWithValue("@Texto", texto);
                    comando.Parameters.AddWithValue("@Data", DateTime.Now);
                    comando.Parameters.AddWithValue("@Id", id);

                    comando.ExecuteNonQuery();
                }
            }
        }

        public void Remover(int id)
        {
            using (var conexao = _gerenciadorBancoDeDados.CriarConexao())
            {
                conexao.Open();

                string query = "DELETE FROM TB01 WHERE ID = @Id";
                using (var comando = new SQLiteCommand(query, conexao))
                {
                    comando.Parameters.AddWithValue("@Id", id);
                    comando.ExecuteNonQuery();
                }
            }
        }
    }
}