import CountryList from "@/components/CountryList";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <CountryList />,
            },
        ],
    },
]);

export default router;
