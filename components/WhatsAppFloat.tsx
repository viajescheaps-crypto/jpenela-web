'use client'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34601172353"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center drop-shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-200"
    >
      <img
        src="/images/WhatsApp_Logo_PNG_Transparente_Sem_Fundo.png"
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </a>
  )
}
