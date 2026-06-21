//link do botao do whatsapp
const btn = document.getElementById('btnWhatsapp');
const contactar = document.getElementById('btnContactar');

const linkWhats = "https://wa.me/244933540750?text=Olá%20Burger%20Delicious,%20quero%20fazer%20um%20pedido";

btn.addEventListener('click', () => {
  window.open(linkWhats, '_blank');
});

contactar.addEventListener('click', () => {
  window.open(linkWhats, '_blank');
});