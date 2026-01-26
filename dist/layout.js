"use client";
import {
  Avatar,
  Button,
  Sidebar
} from "./chunk-NP4KP3QH.js";
import {
  SupremeIcon,
  cn
} from "./chunk-WJVRHA4Y.js";

// src/components/ui/header.tsx
import { useState as useState2, useEffect as useEffect2, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

// src/contexts/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import { jsx } from "react/jsx-runtime";
var AuthContext = createContext(void 0);
var useAuth = () => {
  const context = useContext(AuthContext);
  if (context === void 0) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// src/components/ui/header.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Header = ({ className, items }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState2(false);
  const { logout } = useAuth();
  const userMenuRef = useRef(null);
  const navigate = useNavigate();
  useEffect2(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);
  const navigationItems = items.map((item) => ({
    icon: item.icon,
    label: item.label,
    href: item.href
  }));
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cn(
        "sticky top-0 z-50 w-full bg-slate-100 right-0 flex justify-end",
        className
      ),
      children: /* @__PURE__ */ jsx2("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex py-1 items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx2("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx2(SupremeIcon, { size: 60 }) }),
          /* @__PURE__ */ jsx2("div", { className: "flex items-center", children: /* @__PURE__ */ jsx2("nav", { className: "hidden md:flex items-center gap-2", children: navigationItems.map((item) => {
            const isActive = window.location.pathname === item.href;
            return /* @__PURE__ */ jsx2(
              Button,
              {
                variant: "ghost",
                className: cn(
                  "rounded-lg hover:bg-white hover:border hover:border-slate-200",
                  isActive && "bg-white border border-slate-200"
                ),
                size: "md",
                onClick: () => navigate(item.href),
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx2(
                    "span",
                    {
                      className: cn(
                        "flex-shrink-0 mr-2",
                        isActive && "text-slate-600"
                      ),
                      children: item.icon
                    }
                  ),
                  /* @__PURE__ */ jsx2(
                    "span",
                    {
                      className: cn(
                        "truncate text-slate-600",
                        isActive && "text-slate-600 font-semibold"
                      ),
                      children: item.label
                    }
                  )
                ] })
              },
              item.label
            );
          }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx2(
            Button,
            {
              variant: "secondary",
              onClick: () => {
                logout();
                navigate("/login");
              },
              size: "md",
              children: "Log out"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative", ref: userMenuRef, children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "ghost",
                onClick: () => setIsUserMenuOpen(!isUserMenuOpen),
                children: [
                  /* @__PURE__ */ jsx2(
                    Avatar,
                    {
                      size: "sm",
                      fallback: "AA",
                      className: "bg-supreme-blue-900 text-primary-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsx2(ChevronDownIcon, { className: "h-4 w-4 text-gray-700" })
                ]
              }
            ),
            isUserMenuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 mt-2 w-48 rounded-lg shadow-lg border border-gray-200 py-2 z-50 bg-white", children: [
              /* @__PURE__ */ jsx2(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                  children: "Profile"
                }
              ),
              /* @__PURE__ */ jsx2(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                  children: "Settings"
                }
              ),
              /* @__PURE__ */ jsx2(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                  children: "Help"
                }
              ),
              /* @__PURE__ */ jsx2("div", { className: "border-t border-gray-200 my-1" }),
              /* @__PURE__ */ jsx2(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                  children: "Sign Out"
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    }
  );
};

// src/app/Layout.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Layout = ({
  children,
  showSidebar = true,
  showHeader = false,
  headerItems,
  sidebarItems
}) => {
  if (!showSidebar && !showHeader) {
    return /* @__PURE__ */ jsx3(Fragment, { children });
  }
  return /* @__PURE__ */ jsxs2("div", { className: "min-h-screen bg-white flex", children: [
    showSidebar && /* @__PURE__ */ jsx3("div", { className: "bg-slate-100 border-r border-slate-200 sticky top-0 h-screen z-50", children: /* @__PURE__ */ jsx3(Sidebar, { items: sidebarItems }) }),
    /* @__PURE__ */ jsxs2("div", { className: "flex-1 flex flex-col", children: [
      showHeader && /* @__PURE__ */ jsx3("div", { className: "bg-white border-b border-slate-200 sticky top-0 z-50", children: /* @__PURE__ */ jsx3(Header, { items: headerItems }) }),
      /* @__PURE__ */ jsx3("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsx3("div", { className: "w-full min-w-0", children }) })
    ] })
  ] });
};

// src/app/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
export {
  Layout
};
