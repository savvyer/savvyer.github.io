import cv from "@/data/cv.json";

export default function Skills() {
  return (
    <section className="mt-4">
      <h2 className="border-b-4 mb-2">Top skills</h2>
      <ul className="list-disc pl-8">
        {cv.skills.map(skill => (
          <li key={skill.area}>
            <strong>{skill.area}</strong>
            <span>{skill.stack}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}