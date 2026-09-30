import Typewriter from "typewriter-effect";

function HeroAnimation() {
  return (
    <div className="text-animation-container">
      <Typewriter
        options={{
          strings: [
            "Turning designs into interactive websites ✨",
            "Specializing in Frontend & React Ecosystem ⚛️",
            "Building scalable web applications 🌐",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
}

export default HeroAnimation;
