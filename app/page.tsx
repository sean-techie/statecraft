"use client";

import {useState} from "react";

export default function Home() {

  const title="StateCraft Learning Journey";
  const [lesson,setLesson]=useState(4) ;
  const topic="Variables and JSX";
  
  return (
    <main className="min-h-screen bg-pink-700 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white-400">
        {title}
      </h1>

      <p>
        Lesson {lesson}
      </p>

      <p>
        Topic: {topic}
      </p>

      <button onClick={() =>setLesson(lesson + 1)}>
      Next Lesson
      </button>
    </main>
  );
}





