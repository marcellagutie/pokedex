import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Detail from "./pages/Details/Detail";
import Home from "./pages/Home/Home";


const Router = () => {
    const queryClient = new QueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path=":pokemonName" element={<Detail />} />
                    </Route>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default Router
