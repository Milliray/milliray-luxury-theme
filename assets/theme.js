// theme JS: mobile menu, cart drawer toggle, quick view simple modal
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.main-nav .menu');
  if (toggle){
    toggle.addEventListener('click', ()=>{
      if (!menu) return;
      if (getComputedStyle(menu).display === 'none' || menu.style.display === 'none') menu.style.display = 'flex';
      else menu.style.display = 'none';
    });
  }

  // Cart drawer
  const cartButtons = document.querySelectorAll('.cart-link, .open-cart');
  const drawer = document.querySelector('.cart-drawer');
  const drawerClose = drawer && drawer.querySelector('.close');
  function openCart(){ if (drawer) drawer.classList.add('open'); }
  function closeCart(){ if (drawer) drawer.classList.remove('open'); }
  cartButtons.forEach(btn => btn.addEventListener('click', function(e){ e.preventDefault(); openCart(); }));
  if (drawerClose) drawerClose.addEventListener('click', closeCart);

  // Quick view
  document.querySelectorAll('[data-quick-view]').forEach(button => {
    button.addEventListener('click', async function(e){
      e.preventDefault();
      const url = button.getAttribute('data-product-url');
      if (!url) return;
      // Fetch product snippet (simple approach: load product URL and extract .product-template) - best-effort
      try{
        const res = await fetch(url);
        const text = await res.text();
        const wrapper = document.createElement('div');
        wrapper.innerHTML = text;
        const productHTML = wrapper.querySelector('.product-template') || wrapper.querySelector('main');
        showModal(productHTML ? productHTML.innerHTML : '<p>Quick view not available</p>');
      }catch(err){
        showModal('<p>Unable to load quick view</p>');
      }
    });
  });

  // Simple modal
  function showModal(html){
    let modal = document.querySelector('.quickview-modal');
    if (!modal){
      modal = document.createElement('div');
      modal.className = 'quickview-modal';
      modal.style.position = 'fixed'; modal.style.inset = '0'; modal.style.background = 'rgba(0,0,0,0.6)'; modal.style.display='flex'; modal.style.alignItems='center'; modal.style.justifyContent='center'; modal.style.zIndex='2000';
      const inner = document.createElement('div'); inner.className='quickview-inner'; inner.style.maxWidth='900px'; inner.style.width='94%'; inner.style.maxHeight='88%'; inner.style.overflow='auto'; inner.style.background='#fff'; inner.style.borderRadius='12px'; inner.style.padding='22px';
      const close = document.createElement('button'); close.textContent='Close'; close.style.float='right'; close.addEventListener('click', ()=>{ document.body.removeChild(modal); });
      inner.appendChild(close);
      const content = document.createElement('div'); content.className='quickview-content'; inner.appendChild(content);
      modal.appendChild(inner);
      document.body.appendChild(modal);
    }
    const content = modal.querySelector('.quickview-content');
    content.innerHTML = html || '';
  }
});
