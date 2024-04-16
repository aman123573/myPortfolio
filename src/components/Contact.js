import './Contact.css'
import Button from '../utility/Button'

const Contact = () => {
  return (
    <>
      <section name='contact' className='contact__section'>
        <div className="contact__head">
          <h2 className="section__title">Contacts</h2>
          <span className="section__subtitle">Get in touch</span>

        </div>
        <div className="form-section">
          <h2>Send a message</h2>
          <form>
            <input type="text" placeholder='Your name' />
            <input type="email" placeholder='Email' />
            <input type="number" placeholder='Phone' />
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message'></textarea>
            <Button>Send</Button>
          </form>
        </div>

      </section>
    </>
  )
}

export default Contact
