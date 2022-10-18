import { Suspense } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import useScreens from "./screens";

const App = () => {
    // Screens
    const {Details, Home} = useScreens();
    return (
        <Suspense fallback={<p>Loading...!</p>}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        index={true}
                        element={
                            <Home/>
                        }
                    />
                    <Route
                        path="/details"
                        index={true}
                        element={
                            <Details/>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;