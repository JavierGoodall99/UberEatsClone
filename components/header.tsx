"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle 
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { CartSheet } from "./cart-sheet";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                <Button variant="ghost" className="justify-start">Home</Button>
                <Button variant="ghost" className="justify-start">Restaurants</Button>
                <Button variant="ghost" className="justify-start">Orders</Button>
                <Button variant="ghost" className="justify-start">Account</Button>
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-bold">UberEats</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <CartSheet />
          <ModeToggle />
        </div>
      </div>
      {isSearchOpen && (
        <div className="border-t bg-background p-4">
          <div className="container">
            <Input
              placeholder="Search restaurants and dishes"
              className="w-full"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}