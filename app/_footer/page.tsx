'use client';
export default function Footer() {
  return (
    <>
      <div className=" p-5 px-6 text-center flex flex-col items-center justify-center bg-black border-t border-zinc-800">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Omar Moussa — All Rights Reserved.
        </p>
      </div>
    </>
  );
}