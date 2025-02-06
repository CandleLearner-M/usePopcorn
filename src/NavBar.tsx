type NavBarProps = {
  children: React.ReactNode;
};

export function NavBar({ children }: NavBarProps) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return <h1>🍿 usePopcorn</h1>;
}
