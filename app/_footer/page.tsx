export default function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Omar Moussa — All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
