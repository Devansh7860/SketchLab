import NewButton from "./new-button";
import {List} from "./list";

export default function Sidebar() {
    return (
        <aside className="fixed left-0 z-10 h-full bg-blue-950 w-[60px] hidden lg:flex p-3 flex-col text-white">
            <List />
            <NewButton />
        </aside>
    );
}
