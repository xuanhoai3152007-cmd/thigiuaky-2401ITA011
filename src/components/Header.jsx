function Header({ tongPhan }) {
  const tenQuan = import.meta.env.VITE_TEN_QUAN;

  return (
    <header>
      <h1>{tenQuan}</h1>

      <div>
        Giỏ: <span data-testid="tong-phan">{tongPhan}</span> phần
      </div>
    </header>
  );
}

export default Header;