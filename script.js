const quoteForm = document.getElementById("quoteForm");
const formFeedback = document.getElementById("formFeedback");

if (quoteForm && formFeedback) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formFeedback.textContent = "Recebemos sua solicitação. Em breve nossa equipe entrará em contato.";

    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "formulario",
        event_label: "orcamento_site",
      });
    }

    if (window.fbq) {
      window.fbq("track", "Lead");
    }

    quoteForm.reset();
  });
}
