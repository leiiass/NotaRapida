using System;
using System.Data.SQLite;
using System.IO;

namespace NotaRapida.Infraestrutura.BancoDeDados
{
    public class GerenciadorBancoDeDados
    {
        private readonly string _caminhoBanco = @"C:\Projetos\NotaRapida\bancoDeDados\Nota.sqlite";

        public void CriarBancoSQLite()
        {
            try
            {
                if (!File.Exists(_caminhoBanco))
                {
                    SQLiteConnection.CreateFile(_caminhoBanco);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Ocorreu um erro inesperado ao criar o banco de dados.", ex);
            }
        }

        public SQLiteConnection CriarConexao()
        {
            return new SQLiteConnection($"Data Source={_caminhoBanco};Version=3;");
        }

        public void CriarTabelaTB01()
        {
            try
            {
                using var conexao = CriarConexao();
                conexao.Open();

                string comandoCriacao = @"
                        CREATE TABLE IF NOT EXISTS TB01 (
                            ID INTEGER PRIMARY KEY AUTOINCREMENT,
                            col_texto TEXT,
                            col_dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                        );
                    ";

                using var comando = new SQLiteCommand(comandoCriacao, conexao);
                comando.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro inesperado ao criar a tabela TB01.", ex);
            }
        }
    }
}
