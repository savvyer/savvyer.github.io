import cv from "@/data/cv.json";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-extrabold border-b-4 mb-2">Experience Highlights</h2>
      <ul>
        {cv.experience.map(exp => (
          <li key={exp.duration} className="mb-4">
            <h3 className="mb-1 flex flex-row gap-4">
              <span><Link href={exp.link}>{exp.company}</Link> : </span>
              <span className="grow">{exp.position}</span>
              <span>{exp.duration}</span>
            </h3>
            <ul className="list-disc pl-8">
              {exp.summary.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}