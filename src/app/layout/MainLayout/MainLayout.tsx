import { Outlet } from "react-router"
import './MainLayout.css'

export const MainLayout = () => {
    return (
        <div className="main">
            <header className="header">header</header>
            <main className="outlet"><Outlet /></main>
            <footer className="footer">footer</footer>
        </div>
    )
}