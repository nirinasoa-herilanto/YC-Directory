import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mt-10 text-center">
      <h2 className="font-semibold">Author not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
