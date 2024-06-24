import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <main className="bg-slate-100">
            <Outlet />
        </main>
    );
}

export default DefaultLayout;
