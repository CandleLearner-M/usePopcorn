type LogoProps = {
  onChangeTheme: () => void;
};
export default function Logo({ onChangeTheme }: LogoProps) {
  return <h1 onClick={onChangeTheme} className="pointer">🍿 usePopcorn</h1>;
}
