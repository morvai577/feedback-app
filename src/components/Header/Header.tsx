type HeaderProps = {
  text: string;
};

export const Header = ({ text = "" }: HeaderProps): JSX.Element => {
  return (
    <header className="navbar-center bg-mango">
      <h2 className="p-3 text-center text-3xl font-bold">{text}</h2>
    </header>
  );
};
