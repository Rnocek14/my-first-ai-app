import * as React from "react";
import { cn } from "@/lib/utils";
import { TopNav } from "./TopNav";

interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hideNav?: boolean;
  navItems?: { label: string; href: string }[];
  navActions?: React.ReactNode;
  title?: string;
}

export function AppShell({
  children,
  className,
  hideNav = false,
  navItems,
  navActions,
  title,
  ...props
}: AppShellProps) {
  return (
    <div
      className={cn("min-h-screen bg-background text-foreground flex flex-col", className)}
      {...props}
    >
      {!hideNav && (
        <TopNav title={title} items={navItems} actions={navActions} />
      )}
      <main className="container mx-auto px-4 py-8 max-w-7xl flex-1">
        {children}
      </main>
    </div>
  );
}