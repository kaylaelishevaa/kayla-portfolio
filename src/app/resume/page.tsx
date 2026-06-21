import { redirect } from "next/navigation";

export default function ResumePage(): never {
  redirect("/resume.pdf");
}
