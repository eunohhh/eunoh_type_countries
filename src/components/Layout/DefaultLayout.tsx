import { Outlet } from "react-router-dom";
import TopButton from "../TopButton";

function DefaultLayout() {
    return (
        <main className="bg-slate-100">
            <Outlet />
            <TopButton />
        </main>
    );
}

export default DefaultLayout;
