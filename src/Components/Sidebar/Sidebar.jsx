
import React, { useState } from "react"

import { Link, Outlet } from "react-router-dom"
import { House, Grid, Box, Users, FileText, Sliders, LogOut, User } from "lucide-react";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
        <>
            <div className="row w-100">
                <div className={`${collapsed ? "col-2" : "col-sm-3"}`}>
                    <div className={`d-flex flex-column flex-shrink-0 bg-light p-3 ${collapsed ? "collapsed-sidebar" : ""}`} 
                        style={{ width: collapsed ? "80px" : "250px", height: "calc(100% - 6%)", position: "fixed", transition: "width 0.3s ease" }}>
                        
                        {/* Toggle Button */}
                        <button 
                            className="btn btn-outline-secondary mb-3" 
                            onClick={() => setCollapsed(!collapsed)}
                            style={{ width: "100%", textAlign: "center" }}
                        >
                            ☰
                        </button>

                        {/* Sidebar Navigation */}
                        <ul className="nav nav-pills flex-column mb-auto">
                            <SidebarItem to="/dashboard/home" icon={<House />} text="Home" collapsed={collapsed} />
                            <SidebarItem to="/dashboard/dashboard" icon={<Grid />} text="Dashboard" collapsed={collapsed} />
                            <SidebarItem to="/dashboard/orders" icon={<Box />} text="Orders" collapsed={collapsed} />
                            <SidebarItem to="/dashboard/customers" icon={<Users />} text="Customers" collapsed={collapsed} />
                            <SidebarItem to="/dashboard/reports" icon={<FileText />} text="Reports" collapsed={collapsed} />
                            <SidebarItem to="/dashboard/settings" icon={<Sliders />} text="Settings" collapsed={collapsed} />
                        </ul>

                        <hr />

                        {/* Profile Section */}
                        <div className="dropdown">
                            <Link to="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                                data-bs-toggle="dropdown">
                                <img src="https://via.placeholder.com/40" alt="profile" className="rounded-circle me-2" width="32" height="32" />
                                {!collapsed && <strong>User</strong>}
                            </Link>
                            <ul className="dropdown-menu text-small">
                                <li><Link className="dropdown-item" to="/profile"><User /> Profile</Link></li>
                                <li><Link className="dropdown-item" to="/settings"><Sliders /> Settings</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item text-danger" to="/logout"><LogOut /> Sign out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${collapsed ? "col-10" : "col-sm-9"}`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
  }

  // Sidebar Item Component
    const SidebarItem = ({ to, icon, text, collapsed }) => (
        <li className="nav-item">
            <Link to={to} className="nav-link d-flex align-items-center gap-2 text-dark">
                {icon}
                {!collapsed && <span>{text}</span>}
            </Link>
        </li>
    );
  
  export default Sidebar
  