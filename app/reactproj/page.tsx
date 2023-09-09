import Link from 'next/link';

export default function Reactproj() {
  return (
    <>
      <h1>This very website is a project</h1>
      <h2>
        <Link href="/" className='back'>Back to home</Link>
      </h2>
    </>
  );
}