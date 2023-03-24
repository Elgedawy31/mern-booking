import "./Mail.css";

function Mail() {
  return (
    <div className="mail">
      <h1>Save time , save mondy</h1>
      <span>sing up and we,ll send you to any place</span>
      <div className="inputs">
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Mail;
