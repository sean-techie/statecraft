"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const title = "StateCraft Learning Journey";
  const [lesson, setLesson] = useState(4);
  const topic = "Variables and JSX";

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-200 flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      <p>
        Lesson {lesson}
      </p>

      <p>
        Topic: {topic}
      </p>

      <button
        className="bg-white text-neutral-950 px-4 py-2 rounded-lg"
        onClick={() => setLesson(lesson + 1)}
      >
        Next Lesson
      </button>

      <div className="flex gap-8 mt-8 text-lg">
        <Link href="/about">
          About
        </Link>

        <Link href="/lessons">
          Lessons
        </Link>

        <Link href="/notes">
          Notes
        </Link>

        <Link href="/playground">
          Playground
        </Link>

        <Link href="/challenges">
          Challenges
        </Link>
      </div>
    </main>
  );
}