export default function Footer() {
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading text-xl text-primary-foreground">Zyora</p>
          <p className="text-primary-foreground/40 text-sm font-body mt-1">
            Modern Natural Stone Jewellery
          </p>
        </div>
        <p className="text-primary-foreground/30 text-xs font-body">
          © {new Date().getFullYear()} Zyora. Carry Earth's Good Energy With You.
        </p>
      </div>
    </footer>
  );
}
