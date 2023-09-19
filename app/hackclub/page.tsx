import Link from 'next/link';
import ColoredTextBlock from '../components/ColoredTextBlock2';
import ColoredTextBlock2 from '../components/ColoredTextBlock2';

export default function Hackclub() {
  return (
    <>
      <h2>
        <Link href="/" className="fixed bottom-0 left-0 w-full bg-gray-500 text-white p-2">Back to home</Link>
      </h2>
    <ColoredTextBlock2 />
    </>
  );
}