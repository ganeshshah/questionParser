import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <main id="content" className="main_content_width p-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="px-4 py-6 sm:px-0 mt-4 md:mt-0">
                    < Outlet />
                </div>
            </div>
        </main>
    );
}

export default Layout;