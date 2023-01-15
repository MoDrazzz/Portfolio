import HamburgerInner from "./HamburgerInner";

export default function Hamburger() {
  return (
    <button className="flex h-4 w-4 flex-col justify-between">
      <HamburgerInner />
      <HamburgerInner />
      <HamburgerInner />
    </button>
  );
}
