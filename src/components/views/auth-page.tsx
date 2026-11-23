"use client";

import { useState, useEffect, useRef } from "react";
import {
  Lock,
  User as UserIcon,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Check,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NikkiAvatar } from "../nikki/nikki-avatar";
import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/asset";

interface AuthPageProps {
  onAuth: (user: { id: string; email: string; name: string }) => void;
}

export function AuthPage({ onAuth }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Whether the two password fields match (for live visual feedback)
  const passwordsMatch = mode === "signup" && confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch = mode === "signup" && confirmPassword.length > 0 && password !== confirmPassword;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // 3D tilt effect on mouse move
  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Validate passwords match on signup
    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match. Please double-check and try again.");
      return;
    }

    setLoading(true);
    try {
      if (mode === "signup") {
        // Client-side signup: store user in localStorage
        const users = JSON.parse(localStorage.getItem("nikki-users") || "[]");
        if (users.some((u: { email: string }) => u.email === email)) {
          throw new Error("An account with this username already exists");
        }
        const user = { id: `user-${Date.now()}`, email, name: name || email, password, provider: "credentials" };
        users.push(user);
        localStorage.setItem("nikki-users", JSON.stringify(users));
        const { password: _, ...userWithoutPassword } = user;
        localStorage.setItem("nikki-user", JSON.stringify(userWithoutPassword));
        onAuth(userWithoutPassword);
      } else {
        // Client-side login: check localStorage
        const users = JSON.parse(localStorage.getItem("nikki-users") || "[]");
        const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);
        if (!user) throw new Error("Invalid username or password");
        const { password: _, ...userWithoutPassword } = user;
        localStorage.setItem("nikki-user", JSON.stringify(userWithoutPassword));
        onAuth(userWithoutPassword);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assetUrl("/japan-city-bg.jpeg")})`,
          filter: "brightness(0.7)",
        }}
        aria-hidden
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70"
        aria-hidden
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-soft ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl transition-all duration-500",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.15s ease-out, opacity 0.5s ease, translate 0.5s ease",
          }}
        >
          {/* Logo + heading */}
          <div className="mb-4 flex flex-col items-center gap-3" style={{ transform: "translateZ(40px)" }}>
            <NikkiAvatar size={72} withHalo />
            <div className="text-center">
              <h1
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-rounded), var(--font-sans)" }}
              >
                Nihongo with Nikki
              </h1>
              <p className="jp mt-0.5 text-sm text-muted-foreground">
                {mode === "signup" ? "アカウントを作成" : "ログイン"}
              </p>
            </div>
          </div>

          {/* Continue as guest — highlighted at top */}
          <button
            onClick={() => onAuth({ id: "guest", email: "", name: "Guest" })}
            className="mb-5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/40 bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/20 hover:shadow-md"
            style={{ transform: "translateZ(35px)" }}
          >
            <Sparkles className="h-4 w-4" />
            Continue as Guest
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Divider */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium text-muted-foreground">or sign up / login</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Mode toggle */}
          <div className="mb-6 flex rounded-xl bg-muted/50 p-1" style={{ transform: "translateZ(30px)" }}>
            <button
              onClick={() => { setMode("signup"); setError(""); setConfirmPassword(""); }}
              className={cn(
                "flex-1 rounded-lg py-2 text-sm font-semibold transition-all",
                mode === "signup" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Sign Up
            </button>
            <button
              onClick={() => { setMode("login"); setError(""); setConfirmPassword(""); }}
              className={cn(
                "flex-1 rounded-lg py-2 text-sm font-semibold transition-all",
                mode === "login" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" style={{ transform: "translateZ(20px)" }}>
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </Label>
                <div className="relative">
                  <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="pl-9"
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Username
              </Label>
              <div className="relative">
                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Choose a username"
                  required
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="pl-9 pr-9"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm password — only on signup */}
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your password"
                    required
                    minLength={6}
                    className={cn(
                      "pl-9 pr-9 transition-colors",
                      passwordsMatch && "border-matcha/50 focus-visible:ring-matcha/30",
                      passwordsMismatch && "border-destructive/50 focus-visible:ring-destructive/30"
                    )}
                  />
                  {/* Match indicator icon */}
                  {confirmPassword.length > 0 && (
                    <span
                      className={cn(
                        "absolute right-9 top-1/2 -translate-y-1/2",
                        passwordsMatch ? "text-matcha" : "text-destructive"
                      )}
                    >
                      {passwordsMatch ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {/* Live feedback text */}
                {passwordsMatch && (
                  <p className="text-[11px] font-medium text-matcha flex items-center gap-1">
                    <Check className="h-3 w-3" /> Passwords match
                  </p>
                )}
                {passwordsMismatch && (
                  <p className="text-[11px] font-medium text-destructive flex items-center gap-1">
                    <X className="h-3 w-3" /> Passwords do not match
                  </p>
                )}
              </div>
            )}

            {error && (
              <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">
                {error}
              </p>
            )}

            <Button type="submit" disabled={loading || (mode === "signup" && passwordsMismatch)} className="w-full gap-2" size="lg">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Please wait…
                </>
              ) : (
                <>
                  {mode === "signup" ? "Create Account" : "Login"}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Feature highlights */}
          <div className="mt-6 space-y-2" style={{ transform: "translateZ(15px)" }}>
            {[
              "Free access to all JLPT N5–N1 resources",
              "Track your progress across kanji, vocab & grammar",
              "Sync your streaks, XP, and study history",
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-matcha" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/50">
        <p className="jp">日本語を一緒に学ぼう ・ Nihongo with Nikki</p>
      </div>
    </div>
  );
}
