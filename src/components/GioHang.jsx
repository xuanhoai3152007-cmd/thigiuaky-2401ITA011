function dinhDangGia(gia) {
  return gia.toLocaleString("vi-VN") + " đ";
}

function GioHang({ gio, dsMon }) {
  if (gio.length === 0) {
    return (
      <section data-testid="gio-hang">
        <h2>Giỏ hàng</h2>
        <p>Giỏ hàng trống</p>
      </section>
    );
  }

  const tongTien = gio.reduce((tong, item) => {
    const mon = dsMon.find((m) => m.id === item.id);

    return tong + mon.gia * item.soLuong;
  }, 0);

  return (
    <section data-testid="gio-hang">
      <h2>Giỏ hàng</h2>

      <ul>
        {gio.map((item) => {
          const mon = dsMon.find((m) => m.id === item.id);

          const thanhTien = mon.gia * item.soLuong;

          return (
            <li key={item.id}>
              {mon.ten} × {item.soLuong} —{" "}
              {dinhDangGia(thanhTien)}
            </li>
          );
        })}
      </ul>

      <p data-testid="tong-tien">
        Tổng tiền: {dinhDangGia(tongTien)}
      </p>
    </section>
  );
}

export default GioHang;