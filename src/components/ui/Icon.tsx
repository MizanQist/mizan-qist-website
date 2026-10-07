import {
  BarChart3, Box, Brain, Briefcase, Building2, Cake, Code2, Compass, Eye, Gamepad2, Gem, GraduationCap,
  Hammer, Handshake, Heart, KeyRound, Landmark, Layers, Lightbulb, Lock, Megaphone, Palette, PawPrint, PenTool, Printer,
  Rocket, Ruler, Scale, Scissors, Search, ShieldCheck, ShoppingBag, ShoppingCart, Smartphone, Sparkles,
  Stethoscope, Store, Target, Users, UtensilsCrossed, type LucideProps,
} from "lucide-react";

/** Icons referenced by name from content files, so content stays plain data. */
export const icons = {
  BarChart3, Box, Brain, Briefcase, Building2, Cake, Code2, Compass, Eye, Gamepad2, Gem, GraduationCap,
  Hammer, Handshake, Heart, KeyRound, Landmark, Layers, Lightbulb, Lock, Megaphone, Palette, PawPrint, PenTool, Printer,
  Rocket, Ruler, Scale, Scissors, Search, ShieldCheck, ShoppingBag, ShoppingCart, Smartphone, Sparkles,
  Stethoscope, Store, Target, Users, UtensilsCrossed,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Sparkles;
  return <Cmp aria-hidden {...props} />;
}
