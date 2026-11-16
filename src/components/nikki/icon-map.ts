"use client";

import {
  Home,
  Utensils,
  Plane,
  GraduationCap,
  Briefcase,
  Smile,
  Users,
  Clock,
  Trees,
  ShoppingCart,
  Heart,
  Palette,
  Hand,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  home: Home,
  utensils: Utensils,
  plane: Plane,
  graduationcap: GraduationCap,
  briefcase: Briefcase,
  smile: Smile,
  users: Users,
  clock: Clock,
  trees: Trees,
  shoppingcart: ShoppingCart,
  heart: Heart,
  palette: Palette,
  hand: Hand,
};

export function getLucideIcon(name: string): LucideIcon {
  return MAP[name.toLowerCase()] ?? HelpCircle;
}
