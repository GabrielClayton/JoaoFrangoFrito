import { useMemo, useState } from 'react';
import { FaCartPlus, FaMinus, FaPlus, FaTrash, FaXmark } from 'react-icons/fa6';
import MenuCarousel from '../components/MenuCarousel';
import menuItems from '../data/menuItems';

const storePhone = '5511980796307';
const defaultContactMessage = 'Olá! Gostaria de falar com a loja e receber mais informações.';

const formatCurrency = (value) => {
  const safeValue = Number(value ?? 0);

  if (!Number.isFinite(safeValue)) {
    return 'R$ 0,00';
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(safeValue);
};

function Cardapio() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        if (item.isByWeight) {
          return currentCart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, weight: Number(cartItem.weight || 0) + 1 }
              : cartItem,
          );
        }

        return currentCart.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        );
      }

      if (item.isByWeight) {
        return [...currentCart, { ...item, weight: 1, quantity: 1 }];
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemName, change) => {
    setCart((currentCart) =>
      currentCart
        .map((cartItem) =>
          cartItem.name === itemName
            ? { ...cartItem, quantity: Math.max(0, cartItem.quantity + change) }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    );
  };

  const updateWeight = (itemName, value) => {
    const parsedValue = Number(value);
    const normalizedValue = Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 0.5;

    setCart((currentCart) =>
      currentCart.map((cartItem) =>
        cartItem.name === itemName
          ? { ...cartItem, weight: Math.max(0.5, normalizedValue) }
          : cartItem,
      ),
    );
  };

  const removeFromCart = (itemName) => {
    setCart((currentCart) => currentCart.filter((cartItem) => cartItem.name !== itemName));
  };

  const getItemSubtotal = (item) => {
    const unitPrice = Number(item.price ?? 0);

    if (item.isByWeight) {
      return unitPrice * Number(item.weight || 0);
    }

    return unitPrice * Number(item.quantity || 0);
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.isByWeight ? Number(item.weight || 0) : item.quantity), 0);
  const cartTotal = cart.reduce((sum, item) => sum + getItemSubtotal(item), 0);

  const whatsappMessage = useMemo(() => {
    if (!cart.length) {
      return defaultContactMessage;
    }

    const itemsText = cart
      .map((item) => {
        const quantityText = item.isByWeight ? `${Number(item.weight || 0).toFixed(1).replace(/\.0$/, '')}kg` : `${item.quantity}x`;
        // const subtotal = formatCurrency(getItemSubtotal(item));
        return `- ${item.name} (${quantityText})`;
      })
      .join('\n');

    return `Olá! Vim pelo cardápio digital e gostaria de fazer meu pedido:\n${itemsText}`;
  }, [cart]);

  const whatsappLink = `https://wa.me/${storePhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <section className="cardapio-page">
        <div className="page-header">
          <h2>Cardápio</h2>
          <p>Escolha entre nossas opções de frango frito, porções e combos.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.name} className="menu-item">
              <MenuCarousel images={item.images} altText={item.name} />
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                </div>
                <p>{item.description}</p>
                <div className="menu-item-price-row">
                  <span className="menu-item-price">{item.isByWeight ? `${formatCurrency(item.price)}/kg` : formatCurrency(item.price)}</span>
                  <button
                    type="button"
                    className="menu-item-add"
                    onClick={() => {
                      addToCart(item);
                      setIsCartOpen(true);
                    }}
                    aria-label={`Adicionar ${item.name} ao carrinho`}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <button
        type="button"
        className="cart-floating-button"
        onClick={() => setIsCartOpen(true)}
        aria-label="Abrir carrinho"
      >
        <FaCartPlus />
        <span className="cart-badge">{Math.round(totalItems)}</span>
      </button>

      {isCartOpen && (
        <div className="cart-modal-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-modal" onClick={(event) => event.stopPropagation()}>
            <div className="cart-modal-header">
              <h3>Carrinho</h3>
              <button
                type="button"
                className="cart-modal-close"
                onClick={() => setIsCartOpen(false)}
                aria-label="Fechar carrinho"
              >
                <FaXmark />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="cart-empty">Seu carrinho ainda está vazio.</p>
            ) : (
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.name} className="cart-item">
                    <div className="cart-item-info">
                      <strong>{item.name}</strong>
                      <span>{item.isByWeight ? `${formatCurrency(item.price)}/kg` : formatCurrency(item.price)}</span>
                    </div>

                    {item.isByWeight ? (
                      <div className="cart-item-quantity-block">
                        <label className="cart-item-weight" htmlFor={`weight-${item.name}`}>
                          <span>Kg</span>
                          <input
                            id={`weight-${item.name}`}
                            type="number"
                            min="1.0"
                            step="0.5"
                            value={Number(item.weight || 1.0).toFixed(1).replace(/\.0$/, '')}
                            onChange={(event) => updateWeight(item.name, event.target.value)}
                          />
                        </label>
                        <span className="cart-item-total">{formatCurrency(getItemSubtotal(item))}</span>
                      </div>
                    ) : (
                      <div className="cart-item-quantity-block">
                        <div className="cart-item-controls">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.name, -1)}
                            aria-label={`Diminuir quantidade de ${item.name}`}
                          >
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.name, 1)}
                            aria-label={`Aumentar quantidade de ${item.name}`}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <span className="cart-item-total">{formatCurrency(getItemSubtotal(item))}</span>
                      </div>
                    )}

                    <button
                      type="button"
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.name)}
                      aria-label={`Remover ${item.name} do carrinho`}
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="cart-modal-total">
              <span>Total estimado</span>
              <strong>{formatCurrency(cartTotal)}</strong>
            </div>

            <div className="cart-modal-actions">
              <button type="button" className="cart-back-button" onClick={() => setIsCartOpen(false)}>
                Voltar
              </button>
              <a
                href={whatsappLink}
                className="cart-checkout-button"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsCartOpen(false)}
              >
                Formalizar pedido
              </a>
            </div>
            <div className="cart-whatsapp-hint">
              <span className="info-badge">i</span>
              <span> Irá para o WhatsApp da loja.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cardapio;
