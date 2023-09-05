import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>About me</h1>
      <h2>
        <Link href="/" className='back'>Back to home</Link>
      </h2>
    </>
  );
}