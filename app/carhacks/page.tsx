import Link from 'next/link';
import ColoredTextBlock from '../components/ColoredTextBlock';


export default function carhacks() {
  return (
    <>
      <h1>This is my experience hosting my local hackathon, Carolina Hacks!</h1>
      <ColoredTextBlock />
      <h2>
        <Link href="/" className='back'>Back to home</Link>
      </h2>
    </>
  );
}