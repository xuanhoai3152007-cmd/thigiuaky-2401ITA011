const tenQuan = import.meta.env.VITE_TEN_QUAN;

function Header({ tongPhan }) {
  return (
    <header>
      <h1>{tenQuan}</h1>

      <p data-testid="tong-phan">
        Giỏ: {tongPhan} phần
      </p>
    </header>
  );
}

export default Header;