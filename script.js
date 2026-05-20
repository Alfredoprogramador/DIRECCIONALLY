const quoteForm = document.getElementById("quoteForm");
const formFeedback = document.getElementById("formFeedback");

if (quoteForm && formFeedback) {
  quoteForm.addEventListener("submit", (event) => {
    const hasConfiguredEndpoint =
      quoteForm.getAttribute("action") && quoteForm.getAttribute("action") !== "#";

    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "formulario",
        event_label: "orcamento_site",
      });
    }

    if (window.fbq) {
      window.fbq("track", "Lead");
    }

    if (!hasConfiguredEndpoint) {
      event.preventDefault();
      formFeedback.textContent =
        "Formulário em modo demonstração. Configure o endpoint de envio para receber solicitações.";
      quoteForm.reset();
    }
  });
}
