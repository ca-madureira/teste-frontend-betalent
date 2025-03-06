import Logo from "../assets/Logo.png";

export const Header = () => {
  return (
    <header className="bg-white shadow-md px-2 py-4 lg:py-2 lg:px-14">
      <img src={Logo} alt="logo BeTalent" />
    </header>
  );
};
