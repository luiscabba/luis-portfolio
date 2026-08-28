import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="opacity-70">That project or page does not exist.</p>
      <Link href="/" className="underline underline-offset-4">
        Back home
      </Link>
    </div>
  );
}
