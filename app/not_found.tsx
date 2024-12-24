// pages/non_found.js
import Link from "next/link";

export default function NonFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The resource you are looking for is not available.</p>
      <Link href="/">
        <a style={{ color: "blue", textDecoration: "underline" }}>
          Go back to safety
        </a>
      </Link>
    </div>
  );
}
