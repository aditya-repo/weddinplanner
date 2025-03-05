import Navigation from "@/ui/header/navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation />
        <Image
          src="/delhi_bg.webp"
          alt="banner"
          className="w-full md:h-[500px] h-[360px]  object-cover"
          width={1920}
          height={1080}
        />
    </div>
  );
}
