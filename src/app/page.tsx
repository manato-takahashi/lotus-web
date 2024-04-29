"use client"

import Image from "next/image";
import * as React from "react";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card
} from "@/components/ui/card"

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <>
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Welcome to Lotus web
        </h1>
      </div>
      <Card className="w-[150px] ml-80 p-2 flex justify-start">
        <ul>
          <li>
            <Button variant="ghost">About</Button>
          </li>
          <li>
            <Button variant="ghost">Achievement</Button>
          </li>
          <li>
            <Button variant="ghost">Member</Button>
          </li>
        </ul>
      </Card>
    </div>
    </>
  );
}
