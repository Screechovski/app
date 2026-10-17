import { Outlet } from "react-router"

export const ProgressLayout = () => {
    return (
        <div className="progress">
            <nav className="progress-nav">progress nav</nav>
            <Outlet />
        </div>
    )
}
