using Microsoft.AspNetCore.Mvc;
using NotaRapida.Dominio.Modelos;
using NotaRapida.Servicos.Servicos;

namespace NotaRapida.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotaController : ControllerBase
    {
        private readonly ServicoNota _servicoNota;
        public NotaController(ServicoNota servicoNota)
        {
            _servicoNota = servicoNota;
        }

        [HttpGet("tb01")]
        public OkObjectResult ObterTodos()
        {
            var notas = _servicoNota.ObterTodos();
            return Ok(notas);
        }

        [HttpGet("{id}/tb01")]
        public OkObjectResult ObterPorId(int id)
        {
            var nota = _servicoNota.ObterPorId(id);
            return Ok(nota);
        }

        [HttpPost("tb01/create")]
        public CreatedResult Criar([FromBody] Nota nota)
        {
            var novaNota = _servicoNota.Criar(nota);
            return Created("Nota criada com sucesso.", nota);
        }

        [HttpPatch("tb01/{id}/update")]
        public NoContentResult Atualizar(int id, [FromBody] string texto)
        {
            _servicoNota.Atualizar(id, texto);
            return NoContent();
        }

        [HttpDelete("tb01/{id}/delete")]
        public NoContentResult Remover(int id)
        {
            _servicoNota.Remover(id);
            return NoContent();
        }
    }
}
