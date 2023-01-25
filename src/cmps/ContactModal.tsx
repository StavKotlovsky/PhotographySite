import { useState } from 'react'

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="contact-modal">
      <button onClick={() => setIsOpen(true)}>צור קשר</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Modal Content</p>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactModal
