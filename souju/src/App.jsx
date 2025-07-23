import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./App.css";

const messages = [
  "From baby steps to bold moves, I’ve watched you shine 💖..You're bold enough to face the world. I actually needed brother but you were born as a sister... but now I’m proud to have you!",
  "You are my forever teammate and secret keeper 🥰. I love you thangavva—we fight, love, and stay forever!",
  "Happy Birthday, Little Star 🌟. I can't wait to see you as a doctor! Waiting to see you shine!",
  "No matter how tall you grow, you’ll always be my choti 💫. Same naughtiness... same love!",
  "Proud to call you my sister 💝. Let’s keep fighting and laughing forever like best friends."
];

const sliderImages = [
  { url: "/images/baby.jpg" },
  { url: "/images/cozy.jpg" },
  { url: "/images/crown.jpg" }
];
const handleBalloonClick = (msg, e) => {
  setSelectedMessage(msg);

  // Get click position
  const x = e.clientX;
  const y = e.clientY;

  // Create falling burst pieces
  for (let i = 0; i < 6; i++) {
    const piece = document.createElement("div");
    piece.className = "burst-piece";
    piece.textContent = "🎊"; // or "💥", "✨", etc.
    piece.style.left = `${x + (Math.random() * 40 - 20)}px`;
    piece.style.top = `${y + (Math.random() * 20 - 10)}px`;
    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 1200); // match animation duration
  }

  // Hide the balloon
  e.target.style.display = "none";

  // Reset message
  setTimeout(() => setSelectedMessage(""), 6000);
};


export default function App() {
  const [selectedMessage, setSelectedMessage] = useState("");

  useEffect(() => {
    const music = document.getElementById("bg-music");
    if (music) {
      music.volume = 0.5;
      music.play().catch(() => { });
    }
  }, []);

  const handleBalloonClick = (msg) => {
    setSelectedMessage(msg);
    setTimeout(() => setSelectedMessage(""), 6000);
  };

  return (
    <div className="app-wrapper">
      <video className="bg-video" src="/bg.mp4" autoPlay loop muted />
      <div className="video-overlay" />

      <audio id="bg-music" src="/music.mp3" loop autoPlay />

      <div className="stars" />

      {/* Gifts */}
      <div className="floating-gifts">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="gift" style={{ "--i": i }}>🎁</div>
        ))}
      </div>

      {/* Hearts */}
      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="heart" style={{ "--i": i }}>💖</div>
        ))}
      </div>

      {/* Balloons */}
      <div className="balloon-area">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            className="balloon"
            key={i}
            style={{
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
            onClick={(e) => handleBalloonClick(messages[i % messages.length], e)}
          >
            🎈
          </div>
        ))}

      </div>

      <div className="glass-layer">
        <h1>🎉 Happiest Birthday Soujuu! 🎂</h1>

        {selectedMessage && (
          <div className="message-box">
            <Typewriter
              options={{
                strings: [selectedMessage],
                autoStart: true,
                loop: false,
                delay: 40
              }}
            />
          </div>
        )}

        <div className="scroll-letter">
          <h2>To My Sister</h2>
          <p>
            You are more than family, you’re my soul friend.<br />
            I’ve seen you grow, cry, smile and shine.<br />
            May every dream you dream come true. 💖
          </p>
        </div>

        <div className="card-gallery">
          {sliderImages.map((img, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={img.url} alt="sis" />
                </div>
                <div className="flip-back">
                  <p>{messages[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer>
          <p>💗 With love from your best sibling 💗</p>
        </footer>
      </div>
    </div>
  );
}
