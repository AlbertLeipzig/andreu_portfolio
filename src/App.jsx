import { BurgerMenu } from './components/BurgerMenu';
function App() {
  return (
    <>
      <h1>Hello There</h1>
      <BurgerMenu />
      <form action="">
        <input type="text" placeholder="Full Name" className="input--empty" />
        <textarea placeholder="Your Message Here"></textarea>
        <button>Hello There</button>
      </form>
    </>
  );
}

export default App;
