export const telefonoWhatsApp = '5493512680012';
export const telefonoVisible = '+54 9 351 268-0012';

export function enlaceWhatsApp(mensaje) {
  return `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}

export const enlaceTurnos = enlaceWhatsApp(
  'Hola, quisiera solicitar un turno en Baravalle Consultorios Odontológicos.'
);
