type HeaderProps = {
  text: string;
};

const headerStyles = {
  backgroundColor: "rgba(0,0,0,0.4)",
  color: "#ff6a95",
};

export const Header = ({ text = "" }: HeaderProps): JSX.Element => {
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};
