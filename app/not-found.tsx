import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>Looks like a dead end.</h1><p>The page you’re looking for isn’t here.</p><Link className="button button-light" href="/">Back to home <span aria-hidden="true">→</span></Link></main>;
}
