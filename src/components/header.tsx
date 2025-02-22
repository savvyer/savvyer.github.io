import Link from "next/link";
import cv from "@/data/cv.json";

export default function Header() {
  return (
    <header>
      <h1 className="text-center">{cv.fullName}</h1>
      <p className="flex flex-row justify-center gap-4 my-2">
        <Link href={"mailto:" + cv.email}>{cv.email}</Link>
        <Link href={cv.githubUrl}>{cv.githubUrl}</Link>
      </p>
    </header>
  );
}