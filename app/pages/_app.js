import React from "react";
import RootLayout from "../layout";

function App({Component, pageProps}) {
    return (
        <RootLayout>
            <Component { ...pageProps} />
        </RootLayout>
    )
}