import Link from 'next/link';

export default function Hackclub() {
  return (
    <>
      <h1>This is my experience leading hack club at my high school</h1>
      <h2>
        <Link href="/" className="fixed bottom-0 left-0 w-full bg-gray-500 text-white p-2">Back to home</Link>
      </h2>
    </>
  );
}