import banner from "../assets/bg-shadow.png";
import bannermain from "../assets/banner-main.png";

export default function Banner() {
  return (
    <section
      className="
        relative overflow-hidden
        container mx-auto
        mt-10
        min-h-[520px]
        rounded-3xl
        border border-white/10
        bg-black
        px-6 py-12
        flex flex-col items-center justify-center
        text-center
        shadow-2xl
      "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Main Image */}
        <div className="mb-8 transition duration-500 hover:scale-110">
          <img
            src={bannermain}
            alt="Dream 11 Cricket"
            className="
              w-56
            "
          />
        </div>

        {/* Heading */}
        <h2
          className="
            
            text-3xl
            font-extrabold
            leading-tight
            tracking-tight
            text-white
            
          "
        >
          Assemble Your Ultimat
          <span className="text-[#ccff00]"> Dream 11</span> Cricket Team
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-5
            
            text-md
            leading-6
            text-gray-400
            
          "
        >
          Beyond Boundaries. Beyond Limits.
        </p>

        {/* Button */}

        <button className="mt-5 group relative inline-flex items-center justify-center p-1.5 rounded-2xl bg-[#1e1e20] ring-1 ring-[#ccff00]/60 shadow-[0_0_12px_rgba(204,255,0,0.15)] transition-all duration-200 hover:scale-105 active:scale-95">
          <span className="relative px-6 py-3 text-base font-bold text-black rounded-[10px] bg-linear-to-b from-[#e2ff38] via-[#d4ff00] to-[#b8ee00] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.25)]">
            Claim Free Credit
          </span>
        </button>
      </div>
    </section>
  );
}
