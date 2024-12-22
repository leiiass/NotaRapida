using NotaRapida.Dominio.Interfaces;
using NotaRapida.Infraestrutura.BancoDeDados;
using NotaRapida.Infraestrutura.Repositorios;
using NotaRapida.Servicos.Servicos;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<GerenciadorBancoDeDados>();
var gerenciadorBancoDeDados = new GerenciadorBancoDeDados();
gerenciadorBancoDeDados.CriarBancoSQLite();
gerenciadorBancoDeDados.CriarTabelaTB01();

builder.Services.AddScoped<IRepositorioNota, RepositorioNota>();
builder.Services.AddScoped<ServicoNota>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
