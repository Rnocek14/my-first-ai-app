import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface TopNavProps {
  logo?: React.ReactNode;
  title?: string;
  items?: NavItem[];
  actions?: React.ReactNode;
}

const defaultItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
];

export function TopNav({
  logo,
  title = "App Builder",
  items = defaultItems,
  actions,
}: TopNavProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-4">
        <Link to="/" className="flex items-center gap-2 mr-6">
          {logo || (
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
          )}
          <span className="font-semibold text-lg hidden sm:inline-block">
            {title}
          </span>
        </Link>

        <nav className="flex items-center gap-1 flex-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive(item.href)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {actions && (
          <div className="flex items-center gap-2 ml-auto">{actions}</div>
        )}
      </div>
    </header>
  );
}