import Header from "@/ui/header/header";
import Navigation from "@/ui/header/navigation";

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="bg-main-light h-100"></div>
    </div>
  );
}
