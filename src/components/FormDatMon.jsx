import { useEffect, useRef, useState } from "react";

function FormDatMon({ onGui, choPhepGui }) {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  const [loi, setLoi] = useState({
    hoTen: "",
    soDienThoai: "",
  });

  const oHoTenRef = useRef(null);

  // Khi form vừa xuất hiện, tự động focus vào ô Họ tên
  useEffect(() => {
    oHoTenRef.current?.focus();
  }, []);

  function kiemTraHoTen(value) {
    if (value.trim().length < 2) {
      return "Họ tên cần ít nhất 2 ký tự";
    }

    return "";
  }

  function kiemTraSoDienThoai(value) {
    if (!/^0\d{9}$/.test(value.trim())) {
      return "Số điện thoại gồm 10 chữ số, bắt đầu bằng 0";
    }

    return "";
  }

  function xuLyBlur(e) {
    const { name, value } = e.target;

    if (name === "hoTen") {
      setLoi((loiCu) => ({
        ...loiCu,
        hoTen: kiemTraHoTen(value),
      }));
    }

    if (name === "soDienThoai") {
      setLoi((loiCu) => ({
        ...loiCu,
        soDienThoai: kiemTraSoDienThoai(value),
      }));
    }
  }

  function xuLySubmit(e) {
    e.preventDefault();

    const loiHoTen = kiemTraHoTen(hoTen);
    const loiSoDienThoai =
      kiemTraSoDienThoai(soDienThoai);

    setLoi({
      hoTen: loiHoTen,
      soDienThoai: loiSoDienThoai,
    });

    // Có lỗi thì không gọi onGui
    if (loiHoTen || loiSoDienThoai) {
      return;
    }

    // Hợp lệ thì gửi dữ liệu đã trim
    onGui({
      hoTen: hoTen.trim(),
      soDienThoai: soDienThoai.trim(),
      ghiChu: ghiChu.trim(),
    });
  }

  return (
    <form onSubmit={xuLySubmit}>
      <div>
        <label htmlFor="hoTen">Họ tên</label>

        <input
          ref={oHoTenRef}
          id="hoTen"
          name="hoTen"
          type="text"
          value={hoTen}
          onChange={(e) => setHoTen(e.target.value)}
          onBlur={xuLyBlur}
        />

        {loi.hoTen && (
          <p className="loi" role="alert">
            {loi.hoTen}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="soDienThoai">
          Số điện thoại
        </label>

        <input
          id="soDienThoai"
          name="soDienThoai"
          type="text"
          value={soDienThoai}
          onChange={(e) =>
            setSoDienThoai(e.target.value)
          }
          onBlur={xuLyBlur}
        />

        {loi.soDienThoai && (
          <p className="loi" role="alert">
            {loi.soDienThoai}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ghiChu">Ghi chú</label>

        <textarea
          id="ghiChu"
          name="ghiChu"
          value={ghiChu}
          onChange={(e) => setGhiChu(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={!choPhepGui}
      >
        Gửi đơn
      </button>
    </form>
  );
}

export default FormDatMon;