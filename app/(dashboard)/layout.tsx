
import Sidebar from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-0 lg:pl-[60px] h-full">
                <div className="flex h-full">
                    <OrgSidebar />
                    <div className="h-full flex-1 flex flex-col">
                        <Navbar />
                        <div className="flex-1 overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}