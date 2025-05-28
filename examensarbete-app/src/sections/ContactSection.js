import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactSection = () => {
  // Valideringsschema med Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Namnet måste vara minst 2 tecken')
      .required('Namn krävs'),
    email: Yup.string()
      .email('Ogiltig e-postadress')
      .required('E-post krävs'),
    subject: Yup.string()
      .required('Ämne krävs'),
    message: Yup.string()
      .min(10, 'Meddelandet måste vara minst 10 tecken')
      .required('Meddelande krävs'),
  });

  // Initialisera Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm, setSubmitting, setStatus }) => {
      // Här skulle du normalt skicka data till en server
      console.log('Form values:', values);
      
      // Simulera en serverrespons
      setTimeout(() => {
        setStatus({ success: true });
        setSubmitting(false);
        resetForm();
        
        // Återställ framgångsmeddelandet efter 5 sekunder
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      }, 1000);
    },
  });

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Kontakta oss</h2>
          <div className="underline"></div>
          <p className="section-description">
            Har du frågor om vår forskning eller vill du veta mer? Kontakta oss gärna.
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Kontaktinformation</h3>
            <p>
              Vi är alltid intresserade av att diskutera vår forskning och potentiella 
              samarbeten. Tveka inte att höra av dig om du har frågor eller förslag.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <p>exempel@university.se</p>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <p>+46 70 123 45 67</p>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <p>Institutionen för [ämne]<br />Universitetsvägen 1, 123 45 Universitetsstad</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {formik.status && formik.status.success ? (
              <div className="form-success-message">
                <h3>Tack för ditt meddelande!</h3>
                <p>Vi återkommer till dig så snart som möjligt.</p>
              </div>
            ) : (
              <form onSubmit={formik.handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Namn</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    aria-describedby={formik.errors.name && formik.touched.name ? "name-error" : undefined}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="error-message" id="name-error">{formik.errors.name}</div>
                  ) : null}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-post</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    aria-describedby={formik.errors.email && formik.touched.email ? "email-error" : undefined}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-message" id="email-error">{formik.errors.email}</div>
                  ) : null}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Ämne</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    aria-describedby={formik.errors.subject && formik.touched.subject ? "subject-error" : undefined}
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <div className="error-message" id="subject-error">{formik.errors.subject}</div>
                  ) : null}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Meddelande</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    aria-describedby={formik.errors.message && formik.touched.message ? "message-error" : undefined}
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="error-message" id="message-error">{formik.errors.message}</div>
                  ) : null}
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={formik.isSubmitting}
                  aria-label="Skicka meddelande"
                >
                  {formik.isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 