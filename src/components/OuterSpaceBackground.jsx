const OuterSpaceBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-neutral-950 overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,30,60,1),rgba(0,0,0,1))]"></div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50 animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`, // Random size
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`, // Random position
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`, // Random delay for twinkle
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 shadow-2xl">
        {/* Craters */}
        <div className="absolute top-5 left-7 w-8 h-8 rounded-full bg-gray-400 opacity-50"></div>
        <div className="absolute bottom-8 right-10 w-6 h-6 rounded-full bg-gray-400 opacity-40"></div>
        <div className="absolute top-16 left-20 w-4 h-4 rounded-full bg-gray-400 opacity-30"></div>
      </div>
    </div>
  );
};

export default OuterSpaceBackground;
