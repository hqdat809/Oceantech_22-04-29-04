import * as React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Layout from "./Layout"
import ProductGrid from "./component/ProductGrid"
import NoMatch from "./component/NoMatch"
import ProductInfor from "./component/ProductInfor"

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ProductGrid />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path={`/product/:id`} element={<ProductInfor />} />
            </Routes>
        </div>
    );
}