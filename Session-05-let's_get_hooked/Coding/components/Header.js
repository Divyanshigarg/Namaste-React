export const Title = () => (
  <div class="logo_container">
    <a href="/">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Good_Food.svg/1200px-Good_Food.svg.png"
      />
    </a>
  </div>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



//exporting by default
export default Header;
