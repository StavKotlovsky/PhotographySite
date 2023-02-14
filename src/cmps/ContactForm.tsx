import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ContactForm = () => {
  //   const [msg,setMsg] = useState(null)

  // const handleChange = ({ target }) => {
  //   const field = target.name
  //   const value = target.type === 'number' ? +target.value || '' : target.value
  //   setMsg((prevMsg) => ({ ...prevMsg, [field]: value }))
  // }

  return (
    <section className="form-container flex">
      <form className="flex column">
        <h1>צרו קשר</h1>
        <input type="text" placeholder="שם מלא" />
        <input type="tel" placeholder="טלפון" />
        <input type="email" placeholder="אימייל" />
        <textarea rows={7} placeholder="תוכן ההודעה"></textarea>
        <button type="submit">שלח</button>
      </form>
    </section>
  )
}
