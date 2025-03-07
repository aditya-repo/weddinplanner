import Tabs from "@/ui/vendors/tabs";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to Home!" },
  { id: "about", label: "About", content: "Learn more About us." },
  { id: "contact", label: "Contact", content: "Get in touch!" },
];

export default function Home({ searchParams }: { searchParams: { tab?: string } }) {
    const activeTab = searchParams.tab || "home";
  
  return (
    <div>
      <h1>Next.js App Router SSR Tabs</h1>
      <Tabs tabs={tabs} activeTab={activeTab} />
    </div>
  );
}
