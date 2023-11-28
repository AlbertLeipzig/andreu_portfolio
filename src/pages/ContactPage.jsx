import { PageTitle } from '../components/PageTitle';
import { SocialMediaBar } from '../components/SocialMediaBar';
export const ContactPage = () => {
  return (
    <div className="contact">
      <PageTitle title="Contacte" />
      <form action="">
        <textarea placeholder="el teu missatge" rows="0"></textarea>
        <input type="text" placeholder="El teu nom" class="input--empty" />
        <input
          type="email"
          placeholder="el teu correu electrònic"
          class="input--empty"
        />
        <button>Envia</button>
      </form>
      <SocialMediaBar />
    </div>
  );
};
