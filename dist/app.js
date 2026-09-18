import { siteConfig } from './config.js';
for (const slot of document.querySelectorAll('[data-guarantee]')) {
  slot.className = 'guarantee-line';
  slot.innerHTML = '<img src="assets/selo-garantia.png" width="500" height="500" alt="Garantia de 30 dias" loading="lazy"><p>O risco é por nossa conta. Tenha resultados ou devolvemos seu dinheiro.</p>';
}
for (const link of document.querySelectorAll('[data-checkout]')) {
  if (siteConfig.checkoutUrl) link.href = siteConfig.checkoutUrl;
  else link.addEventListener('click', (event) => { event.preventDefault(); const notice = document.querySelector('#checkout-notice'); notice.hidden = false; notice.focus(); });
}
for (const [key, selector] of [['privacyUrl','[data-privacy]'],['termsUrl','[data-terms]']]) {
  const element = document.querySelector(selector);
  if (element && siteConfig[key]) { const link = document.createElement('a'); link.href = siteConfig[key]; link.textContent = element.textContent; element.replaceWith(link); }
}
let deadline = Date.parse(siteConfig.offerEndsAt);
if (!Number.isFinite(deadline) && siteConfig.offerDurationSeconds > 0) {
  const storageKey = `perseverance:offer-deadline:${siteConfig.offerDurationSeconds}`;
  deadline = Date.now() + siteConfig.offerDurationSeconds * 1000;
  try {
    const saved = Number(localStorage.getItem(storageKey));
    if (Number.isFinite(saved) && saved > 0) deadline = saved;
    else localStorage.setItem(storageKey, String(deadline));
  } catch {
    // Browsers that block storage still get a working countdown for this visit.
  }
}
if (Number.isFinite(deadline)) {
  const update = () => {
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
    document.querySelectorAll('[data-time]').forEach((element, index) => {
      element.textContent = String(values[index]).padStart(index ? 2 : 1, '0');
      element.nextElementSibling.textContent = values[index] === 1 ? ['DIA', 'HORA', 'MINUTO', 'SEGUNDO'][index] : ['DIAS', 'HORAS', 'MINUTOS', 'SEGUNDOS'][index];
    });
  };
  update(); setInterval(update, 1000);
}
