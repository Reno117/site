import Link from 'next/link';
import ColoredTextBlock3 from '../components/ColoredTextBlock3';

export default function Reactproj() {
  return (
    <>
      <h2>
        <Link href="/" className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-2">Back to home</Link>
      </h2>
      <ColoredTextBlock3 />
    </>
  );
}