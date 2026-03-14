export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>EJECT, me contrata! 😁</h1>

      <p style={styles.subtitle}>
        Olá! Me chamo Leonardo, e sou estudante do curso de Ciências e
        Tecnologia na UFRN. Tenho interesse em computação e segurança da
        informação e estou buscando uma oportunidade de aprender na prática e
        contribuir com projetos reais.
      </p>

      <div style={styles.buttons}>
        <a
          href="https://github.com/hashrdss"
          target="_blank"
          style={styles.button}
        >
          Meu GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/lssec/"
          target="_blank"
          style={styles.buttonSecondary}
        >
          LinkedIn
        </a>
      </div>

      <p style={styles.footer}>
        Página feita especialmente para o processo seletivo da EJECT 🚀
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },

  subtitle: {
    maxWidth: "600px",
    fontSize: "1.2rem",
    marginBottom: "30px",
    lineHeight: "1.6",
    color: "#cbd5f5",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
  },

  button: {
    padding: "12px 24px",
    background: "#38bdf8",
    color: "#0f172a",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },

  buttonSecondary: {
    padding: "12px 24px",
    background: "transparent",
    border: "2px solid #38bdf8",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },

  footer: {
    marginTop: "20px",
    fontSize: "0.9rem",
    opacity: 0.7,
  },
};
