// components/ThreeDCard.jsx
import { ProjectCard } from "@/components/ProjectCard";

/** Thin wrapper so you can customize 3D styling later if needed */
export default function ThreeDCard(props) {
  return <ProjectCard {...props} />;
}
