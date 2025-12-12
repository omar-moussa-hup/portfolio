'use client';
export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "HTML & CSS",
    "Git & GitHub",
    "Frontend Architecture",
  ];

  return (
    <section className="py-16 bg-white dark:bg-zinc-950 transition h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800
              bg-zinc-100 dark:bg-zinc-900
              text-zinc-900 dark:text-zinc-100
              text-center font-medium shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
