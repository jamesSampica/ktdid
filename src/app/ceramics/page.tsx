import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Ceramics</h2>
      <ol>
        <li>
          <Link href="/lesson-one">Lesson One: Great Expectations</Link>
        </li>
        <li>
          <Link href="/lesson-two">Lesson Two: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-three">Lesson Three: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-four?studio-time=ceramics">Lesson Four: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-five">Lesson Five: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-six">Lesson Six: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-seven">Lesson Seven: Cleaning Part 1</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-eight">Lesson Eight: Cleaning Part 2</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-nine">Lesson Nine: Creativity</Link>
        </li>
      </ol>
    </main>
  );
}