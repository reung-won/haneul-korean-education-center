import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer
      className={cn(
        'flex flex-col gap-6 md:gap-10 items-center justify-center py-8 md:py-12 bg-[#2A338E]',
      )}
    >
      <div className={cn('flex flex-row gap-3 md:gap-4')}>
        <Link
          href="https://www.instagram.com/haneul__official?igsh=MXFhM2M5Y21laG9xbg%3D%3D"
          target="_blank"
          className={cn(
            'w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#2A338E] shadow-[2px_3px_10px_rgba(0,0,0,0.51)] flex items-center justify-center',
          )}
        >
          <Image
            src="/instagram.svg"
            alt="instagram"
            width={28}
            height={28}
            className="md:w-10 md:h-10"
          />
        </Link>

        <Link
          href="https://blog.naver.com/haneuledu-"
          target="_blank"
          className={cn(
            'w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#2A338E] shadow-[2px_3px_10px_rgba(0,0,0,0.51)] flex items-center justify-center',
          )}
        >
          <Image
            src="/blog.png"
            alt="blog"
            width={28}
            height={28}
            className="md:w-10 md:h-10"
          />
        </Link>
      </div>
      <div className="text-center">
        <p className={cn('text-white text-sm')}>
          대구 수성구 달구벌대로 2507 8층
        </p>
      <br />
        <p className={cn('text-white text-xs')}>
          ⓒ haneuledu all rights reserved.
        </p>
      </div>
    </footer>
  );
}
