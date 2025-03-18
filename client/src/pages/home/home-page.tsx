const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-16 perspective-1000">
      {/* First 3D cube */}
      <div className="w-20 h-20 transform-3d">
        <div className="translate-z-12 rotate-x-0 bg-sky-300/75 flex items-center justify-center">
          1
        </div>
        <div className="-translate-z-12 rotate-y-[18deg] bg-sky-300/75 flex items-center justify-center">
          2
        </div>
        <div className="translate-x-12 rotate-y-90 bg-sky-300/75 flex items-center justify-center">
          3
        </div>
        <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 flex items-center justify-center">
          4
        </div>
        <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 flex items-center justify-center">
          5
        </div>
        <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 flex items-center justify-center">
          6
        </div>
      </div>

      {/* Second 3D cube with backface visibility */}
      <div className="w-20 h-20">
        <div className="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible flex items-center justify-center">
          1
        </div>
        <div className="-translate-z-12 rotate-y-[18deg] bg-sky-300/75 backface-visible flex items-center justify-center">
          2
        </div>
        <div className="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible flex items-center justify-center">
          3
        </div>
        <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible flex items-center justify-center">
          4
        </div>
        <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible flex items-center justify-center">
          5
        </div>
        <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible flex items-center justify-center">
          6
        </div>
      </div>
    </div>
  );
};

export default HomePage;
