import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex container mx-auto px-20 mt-5 w-full">
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
