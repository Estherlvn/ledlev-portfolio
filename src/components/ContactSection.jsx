import React, { useState } from 'react'; // Importer useState
import './ContactSection.css';
import { db } from '../firebase.js'; // S'assurer que le chemin vers le fichier firebase.js est correct
import { collection, addDoc } from 'firebase/firestore'; // Importer les fonctions Firestore

const ContactSection = () => {
  // 1. Gérer les états des champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Pour le bouton Envoyer
  const [success, setSuccess] = useState(false); // Message de succès
  const [error, setError] = useState('');       // Message d'erreur

  const handleSubmit = async (e) => { // Rendre la fonction asynchrone
    e.preventDefault();
    setLoading(true); // Activer l'état de chargement
    setSuccess(false); // Réinitialiser le succès
    setError('');      // Réinitialiser l'erreur

    try {
      // 2. Ajouter le document à la collection 'contactMessages'
      await addDoc(collection(db, 'contactMessages'), {
        name: name,
        email: email,
        message: message,
        timestamp: Date.now(), // Pour savoir quand le message a été envoyé
        // Possibilité d'ajouter d'autres champs si souhaité, ex: isRead: false
      });

      setSuccess(true); // Indiquer le succès
      setName('');      // Vider les champs après envoi
      setEmail('');
      setMessage('');
      
    } catch (err) {
      console.error("Erreur lors de l'envoi du message : ", err);
      setError("Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.");
    } finally {
      setLoading(false); // Désactiver l'état de chargement
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <div className="header-line"></div>
        <h3>Contact</h3>

        <p>
          Contactez‑moi et discutons ensemble de votre futur projet !
          <br />
          Je suis joignable également sur{" "}
          <a href="https://www.linkedin.com/in/esther-led-lev/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>.
        </p>

        <p className="thanks">Merci pour votre intérêt,</p>
        <p className="signature">Esther</p>

        <div className="socials">
          <a href="https://www.linkedin.com/in/esther-led-lev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Estherlvn" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <form className="contact-right" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom:</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          required 
          value={name} 
          onChange={(e) => setName(e.target.value)} // Mettre à jour l'état
        />

        <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} // Mettre à jour l'état
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          rows="8" 
          required 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} // Mettre à jour l'état
        />

        <button type="submit" className="hero-button" disabled={loading}>
          {loading ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        {success && <p className="success-message">Votre message a été envoyé avec succès !</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
