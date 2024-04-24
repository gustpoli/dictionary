/* eslint-disable @next/next/no-img-element */

import WordCard from '@/components/WordCard'
import words from '@/data/words.json'
words.sort((a, b) => {
    if (a.english < b.english) return -1;
    if (a.english > b.english) return 1;
    return 0;
});

export default function Home() {



  return (
    <div className="flex flex-col justify-center items-center gap-3">
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {words.map((word, index) => 
                <WordCard key={index} word={word} />
            )}
        </div>
    </div>
  )

}
