function FaleConosco() {
  function openWhatsApp() {
    const mensagem = 'Olá! Gostaria de fazer um pedido e receber mais informações.';
    const url = `https://wa.me/5511985903147?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
  }

  function openEmail() {
    const email = 'gabriel.clayton.lima@gmail.com';
    const subject = 'Contato pelo site Joao Frango Frito';
    const body = 'Olá,\nGostaria de entrar em contato para solicitar um delivery e/ou pedir informações.';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <section className="contact-page">
      <div className="page-header">
        <h2>Fale Conosco</h2>
        <p>Escolha a forma mais rápida de falar com a gente: WhatsApp ou e-mail direto.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-form contact-actions">
          <div className="contact-action-card">
            <h3>WhatsApp</h3>
            <p>Converse diretamente pelo WhatsApp para pedidos, dúvidas e agendamentos.</p>
            <button type="button" onClick={openWhatsApp}>Abrir WhatsApp</button>
          </div>
          <div className="contact-action-card">
            <h3>E-mail</h3>
            <p>Envie sua mensagem para nosso e-mail e receba retorno personalizado.</p>
            <button type="button" onClick={openEmail}>Enviar E-mail</button>
          </div>
        </div>
        <div className="contact-info">
          <div>
            <h3>Atendimento</h3>
            <p>Segunda a sábado, das 10h às 22h.</p>
          </div>
          <div>
            <h3>WhatsApp</h3>
            <p>+55 11 9 8590-3147</p>
          </div>
          <div>
            <h3>E-mail</h3>
            <p>gabriel.clayton.lima@gmail.com</p>
          </div>
          <div>
            <h3>Delivery</h3>
            <p>Peça pelos apps de entrega mais populares.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaleConosco;
