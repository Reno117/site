import Link from 'next/link';

export default function Hackclub() {
  return (
    <>
      <h1>This is my experience leading hack club at my high school</h1>
      <h2>
        <Link href="/" className='back'>Back to home</Link>
      </h2>
    </>
  );
}