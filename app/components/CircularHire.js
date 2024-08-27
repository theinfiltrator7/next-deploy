export default function CircularLogo() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden p-4 ">
      {/* Circular Text */}
      <svg className="absolute w-28 h-28 spin-slow ">
        <defs>
          <path
            id="textCircle"
            d="M 56, 56 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
          />
        </defs>
        <text fontSize="13" className="fill-current text-gray-300">
          <textPath href="#textCircle" startOffset="50%" textAnchor="middle">
            Full stack Developer
          </textPath>
        </text>
      </svg>

      {/* Logo (AB) */}
      <div className="flex items-center justify-center text-center w-12 h-12 bg-slate-300 text-white text-xs font-bold rounded-full">
        Hire Me
      </div>
    </div>
  );
}
