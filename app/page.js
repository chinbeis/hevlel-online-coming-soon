import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Custom Logo */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center space-x-2">
        <div className="text-white font-bold text-lg sm:text-2xl leading-none">
          <p>HEVLEL</p>
          <p>ONLINE</p>
        </div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
      </div>

      {/* Smaller Video */}
      <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto mt-16 sm:mt-20">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/comingsoon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Content */}
      <div className="flex flex-col items-center justify-center mt-6 text-white text-center">

        {/* Info Text */}
        <div className="text-center max-w-xs sm:max-w-md">
          <p className="mb-4 text-sm sm:text-base">
            HEVLEL.ONLINE тун удахгүй бэлэн болох ба хүссэн загвараа өөрөө загварчилж, захиалгаа онлайнаар захиалах боломжтой болно.
          </p>
          <p className="mb-1 font-semibold text-sm sm:text-base">ХОЛБОО БАРИХ</p>
          <p className="mb-1 text-sm sm:text-base">
            Мэйл Хаяг: <a href="mailto:info@hevlel.online" className="text-blue-400 hover:underline">info@hevlel.online</a>
          </p>
          <p className="text-sm sm:text-base">Утасны Дугаар: +97688224599</p>
        </div>
      </div>
    </div>
  );
}
