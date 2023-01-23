/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return (


<div className="min-h-screen flex">
<nav className="w-56 flex-none ...">
<Sidebar/>

</nav>

<main className="flex-1 min-w-0 overflow-auto ...">
<main classNameName="bg-gray-200 min-h-full w-full h-full p-6">
                    {children}
                </main>
</main>
</div>

    );
}

export default Layout;
