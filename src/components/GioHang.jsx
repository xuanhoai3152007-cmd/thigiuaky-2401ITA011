import { useMemo } from "react";

function GioHang({ gio, dsMon }) {
  const tongTien = useMemo(() => {
    return gio.reduce((tong, dong) => {
      const mon = dsMon.find((item) => item.id === dong.id);

      if (!mon) {
        return tong;
      }

      return tong + mon.gia * dong.soLuong;
    }, 0);
  }, [gio, dsMon]);

  if (gio.length === 0) {
    return (
      <section data-testid="gio-hang">
        <p>Giỏ hàng trống</p>
      </section>
    );
  }

  return (
    <section data-testid="gio-hang">
      <ul>
        {gio.map((dong) => {
          const mon = dsMon.find(
            (item) => item.id === dong.id
          );

          if (!mon) {
            return null;
          }

          const thanhTien = mon.gia * dong.soLuong;

          return (
            <li key={dong.id}>
              {mon.ten} × {dong.soLuong} —{" "}
              {thanhTien.toLocaleString("vi-VN")} đ
            </li>
          );
        })}
      </ul>

      <p data-testid="tong-tien">
        Tổng tiền: {tongTien.toLocaleString("vi-VN")} đ
      </p>
    </section>
  );
}

export default GioHang;