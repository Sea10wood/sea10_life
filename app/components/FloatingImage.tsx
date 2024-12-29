import styles from '@/app/styles/FloatingImage.module.css';
import Image from 'next/image';
import zIndex from '../styles/zIndex';

export default function FloatingImage() {
  return (
    <div className="absolute bottom-4 w-full flex flex-col items-center " style={{ zIndex: zIndex.floatingImage }}>
      <div className={`relative ${styles.float}`}>
        <Image
          src="/sea10.webp"
          alt="Sea10"
          width={500} 
          height={500}
          className="w-[300px] sm:w-[400px] md:w-[500px] drop-shadow-lg"
          priority
        />
        <div className={`absolute top-[-40px] left-1/2 transform ${styles.floatBubble}`}>
          <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg">
            <p className="text-center text-sm sm:text-base whitespace-nowrap">
              こんにちは！Sea10です！
            </p>
          </div>
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
        </div>
      </div>
    </div>
  );
}
