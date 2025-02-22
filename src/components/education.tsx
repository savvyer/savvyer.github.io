import Link from "next/link";
import cv from "@/data/cv.json";

export default function Education() {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-extrabold border-b-4 mb-2">Education</h2>
      <ul className="list-disc pl-8">
        {cv.education.map(edu => (
          <li key={edu.degree}>
            <h3 className="mb-1 flex flex-row gap-4 justify-between">
              <span><Link href={edu.link}>{edu.uni}</Link></span>
              <span>{edu.year}</span>
            </h3>
            <p >
              {edu.degree}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}