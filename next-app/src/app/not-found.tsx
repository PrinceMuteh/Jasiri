import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black text-white" style={{ minHeight: "60vh" }}>
      <div className="jasiri-container py-32 text-center">
        <h1 className="display-section">Page not found.</h1>
        <p className="mt-6">
          <Link href="/work" className="link-chev-dark link-chev">
            Back to work
          </Link>
        </p>
      </div>
    </div>
  );
}
