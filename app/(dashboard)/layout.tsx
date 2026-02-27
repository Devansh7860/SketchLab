
import Sidebar from "./_components/sidebar";
import {OrgSidebar} from "./_components/org-sidebar";
import {Navbar} from "./_components/navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=" h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex h-full gap-x-3">
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        <Navbar />
                        {children}
                    </div>
                </div>

            </div>
        </main>
    );
}