/**
 * Dr. Ads - Advanced Tracking & UTM Persistence Engine
 * 
 * 1. Captura parâmetros UTM e GCLID da URL
 * 2. Persiste em sessionStorage para não perder se o visitante navegar entre páginas
 * 3. Injeta no link do WhatsApp e dispara eventos no GTM (dataLayer) e Google Ads
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];

export function initUTMTracking() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  let capturedUTMs = {};

  UTM_KEYS.forEach(key => {
    const val = urlParams.get(key);
    if (val) {
      capturedUTMs[key] = val;
      sessionStorage.setItem(`dr_ads_${key}`, val);
    } else {
      const stored = sessionStorage.getItem(`dr_ads_${key}`);
      if (stored) {
        capturedUTMs[key] = stored;
      }
    }
  });

  return capturedUTMs;
}

export function getStoredUTMs() {
  if (typeof window === 'undefined') return {};
  const utms = {};
  UTM_KEYS.forEach(key => {
    const val = sessionStorage.getItem(`dr_ads_${key}`);
    if (val) utms[key] = val;
  });
  return utms;
}

export function buildWhatsAppLink({ phone, defaultMessage, doctorName, serviceTitle, source = 'site' }) {
  const cleanPhone = (phone || '').replace(/\D/g, '');
  const utms = getStoredUTMs();
  
  let text = defaultMessage || `Olá! Gostaria de informações sobre agendamento de consulta com ${doctorName || 'o médico'}.`;
  
  if (serviceTitle) {
    text = `Olá! Vi o atendimento para *${serviceTitle}* no site e gostaria de agendar uma consulta com ${doctorName || 'o especialista'}.`;
  }

  // Identificador discreto de origem para a secretária
  const originTag = utms.utm_campaign 
    ? `\n\n[Ref: Google Ads | Campanha: ${utms.utm_campaign}${utms.utm_term ? ' - ' + utms.utm_term : ''}]`
    : `\n\n[Ref: Site Oficial - ${source}]`;

  const fullText = encodeURIComponent(text + originTag);
  return `https://wa.me/${cleanPhone}?text=${fullText}`;
}

export function trackConversion(eventName, eventData = {}) {
  if (typeof window === 'undefined') return;

  const utms = getStoredUTMs();
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...utms,
    ...eventData
  };

  // 1. Google Tag Manager DataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  // 2. Google Analytics 4 direto (se gtag existir)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  console.log(`[Dr. Ads Tracking] Evento disparado: ${eventName}`, payload);
}
