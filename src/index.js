import React, { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

const socialMedia = [
  { icon: "fa-facebook", href: "https://facebook.com" },
  { icon: "fa-instagram", href: "https://instagram.com" },
  { icon: "fa-twitter", href: "https://twitter.com" },
  { icon: "fa-github", href: "https://github.com" },
  { icon: "fa-google", href: "https://google.com" },
  { icon: "fa-linkedin", href: "https://linkedin.com" },
];

function App() {
  return (
    <div>
      <div className="card">
        <div className="top">
          <Header />
          <Identity />
        </div>
        <div className="bottom">
          <Biodata />
          <Highlight />
        </div>
      </div>
    </div>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton key={index} icon={data.icon} href={data.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButton key={index} icon={data.icon} href={data.href} />
        ))}
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Murtaki Shihab</div>
      </div>
      <div className="title">Web Developer</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>
        My Name Is <b>Murtaki</b> and I am a Web Developer
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in a,
        quod, quae numquam ducimus nostrum alias delectus perspiciatis dolores
        odit rerum quo eos non mollitia ad iusto corporis nam!
      </p>
    </div>
  );
}

function Badge({ text }) {
  return <button className="height">{text}</button>;
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge text="PHP" />
      <Badge text="JavaScript" />
      <Badge text="Laravel" />
      <Badge text="React" />
    </div>
  );
}

function SocialButton({ icon, href }) {
  return (
    <button
      onClick={() => window.open(href, "_blank")}
      rel="noopener noreferrer"
    >
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
