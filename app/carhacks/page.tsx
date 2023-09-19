'use client';

import Link from 'next/link';
import ColoredTextBlock from '../components/ColoredTextBlock';
import { UIEventHandler, useState } from 'react';


export default function carhacks() {
  const [position, setPosition] = useState(0);
  const onScroll: UIEventHandler<HTMLDivElement> = (event) => {
    const pi =event.currentTarget.scrollTop;
    setPosition(pi)
  }
  return (
    <div onScroll={onScroll} className='max-h-[80vh] overflow-y-scroll'>
      <h1>This is my experience hosting my local hackathon, Carolina Hacks!</h1>
      <ColoredTextBlock />
      <div>
        {position}
      </div>
      <h2>
        <Link href="/" className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-2">Back to home</Link>
      </h2>
    </div>
  );
}