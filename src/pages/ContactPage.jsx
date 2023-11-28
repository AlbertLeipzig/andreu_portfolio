import { SocialMediaBar } from '../components/SocialMediaBar';
export const ContactPage = () => {
  return (
    <div className="contact">
      <h1>Contacte</h1>
      <form action="">
        <textarea placeholder="el teu missatge"></textarea>
        <input type="text" placeholder="El teu nom" />
        <input type="email" placeholder="el teu correu electrònic" />
        <button>Envia</button>
      </form>
      <SocialMediaBar />
    </div>
  );
};
