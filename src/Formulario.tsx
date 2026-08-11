export default function Formulario() {
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1>Formulário Pré-Sessão de Mapeamento</h1>

      <p>
        Antes da nossa sessão, preciso conhecer um pouco mais da sua história.
      </p>

      <p>
        O preenchimento leva cerca de 10 minutos e todas as informações são confidenciais.
      </p>

      <a
        href="https://forms.gle/sDSJePVEW9iTjRYNA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            background: "#5A2EA6",
            color: "#fff",
            padding: "16px 30px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Preencher Formulário
        </button>
      </a>
    </div>
  );
}