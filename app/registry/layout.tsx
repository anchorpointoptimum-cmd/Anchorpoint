export default function RegistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute inset-0 opacity-[0.03] registry-grid" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-teal-500/10 blur-[160px]" />

      </div>

      <div className="relative z-10">
        {children}
      </div>

    </main>
  );
}