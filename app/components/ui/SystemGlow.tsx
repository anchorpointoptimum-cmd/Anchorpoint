export default function SystemGlow() {

  return (

    <div className="
      pointer-events-none
      absolute inset-0
      overflow-hidden
    ">

      {/* Primary Glow */}
      <div className="
        absolute
        top-[-10%]
        left-1/2
        -translate-x-1/2
        w-[1200px]
        h-[500px]
        bg-teal-500/10
        blur-[180px]
      " />

      {/* Secondary Glow */}
      <div className="
        absolute
        bottom-[-20%]
        right-[-10%]
        w-[700px]
        h-[500px]
        bg-cyan-500/5
        blur-[180px]
      " />

      {/* Ambient Layer */}
      <div className="
        absolute
        top-[40%]
        left-[-10%]
        w-[500px]
        h-[500px]
        bg-emerald-500/5
        blur-[140px]
      " />

    </div>

  );

}