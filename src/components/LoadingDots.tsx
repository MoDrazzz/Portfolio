import LoadingDot from "./LoadingDot";

export default function LoadingDots() {
  return (
    <div className="flex gap-1">
      <LoadingDot delay={100} />
      <LoadingDot delay={200} />
      <LoadingDot delay={300} />
    </div>
  );
}
