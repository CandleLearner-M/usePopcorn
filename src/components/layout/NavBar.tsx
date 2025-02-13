type NavBarProps = {
  children: React.ReactNode;
};

export function NavBar({ children }: NavBarProps) {
  return <nav className="navbar">{children}</nav>;
}
