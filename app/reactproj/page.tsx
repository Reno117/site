import Link from 'next/link';

export default function Reactproj() {
  return (
    <>
      <h1>This is very website is a project</h1>
      <h2>
        <Link href="/" className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-2">Back to home</Link>
      </h2>
    </>
  );
}