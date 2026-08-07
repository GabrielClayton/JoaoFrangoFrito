function FaleConosco() {
  function openWhatsApp() {
    const mensagem = 'Olá! Gostaria de fazer um pedido e receber mais informações.';
    const url = `https://wa.me/5511980796307?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
  }

  function openEmail() {
    const email = 'luizpinheiro2silva@gmail.com';
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
            <p>+55 11 9 8079-6307</p>
          </div>
          <div>
            <h3>E-mail</h3>
            <p>luizpinheiro2silva@gmail.com</p>
          </div>
          <div>
            <h3>Delivery / Endereço</h3>
            <p>Peça pelos apps de entrega mais populares!</p>
            <p>ENTREGA GRÁTIS em todas as encomendas!</p>
            <p>Rua Salvador Fernandes Cardia, 927 - Vila Mara - São Paulo/SP.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaleConosco;
