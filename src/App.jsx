import { useEffect, useState } from "react";

import Header from "./components/Header";
import DanhSachMon from "./components/DanhSachMon";
import GioHang from "./components/GioHang";
import FormDatMon from "./components/FormDatMon";
import Khung from "./components/Khung";
import useLocalStorage from "./hooks/useLocalStorage";

const dsMon = [
  {
    id: 1,
    ten: "Bún bò Huế",
    moTa: "Bún bò Huế truyền thống",
    gia: 45000,
    daHet: false,
  },
  {
    id: 2,
    ten: "Bánh bèo",
    moTa: "Bánh bèo Huế với tôm cháy",
    gia: 30000,
    daHet: false,
  },
  {
    id: 3,
    ten: "Nem lụi",
    moTa: "Nem lụi nướng thơm ngon",
    gia: 40000,
    daHet: false,
  },
  {
    id: 4,
    ten: "Bánh bột lọc",
    moTa: "Bánh bột lọc nhân tôm thịt",
    gia: 35000,
    daHet: true,
  },
  {
    id: 5,
    ten: "Cơm hến",
    moTa: "Cơm hến đậm đà xứ Huế",
    gia: 35000,
    daHet: false,
  },
  {
    id: 6,
    ten: "Bánh khoái",
    moTa: "Bánh khoái giòn rụm",
    gia: 40000,
    daHet: false,
  },
  {
    id: 7,
    ten: "Chè bắp",
    moTa: "Chè bắp Huế ngọt thơm",
    gia: 25000,
    daHet: true,
  },
  {
    id: 8,
    ten: "Cơm âm phủ",
    moTa: "Cơm âm phủ đặc sản Huế",
    gia: 45000,
    daHet: false,
  },
];

function App() {
  const tenQuan = import.meta.env.VITE_TEN_QUAN;

  // Giỏ hàng
  const [gio, setGio] = useLocalStorage(
    "gio-hang",
    []
  );

  // Món đang được chọn
  const [idDangChon, setIdDangChon] = useState(null);

  // Thông báo gửi đơn thành công
  const [thongBao, setThongBao] = useState("");

  // Dùng để reset FormDatMon
  const [formKey, setFormKey] = useState(0);

  // Tổng số phần
  const tongPhan = gio.reduce(
    (tong, dong) => tong + dong.soLuong,
    0
  );

  // Cập nhật tiêu đề trình duyệt
  useEffect(() => {
    if (tongPhan === 0) {
      document.title = tenQuan;
    } else {
      document.title = `(${tongPhan}) ${tenQuan}`;
    }
  }, [tongPhan, tenQuan]);

  // Đặt món
  function datMon(id) {
    setGio((gioCu) => {
      const monDaCo = gioCu.find(
        (dong) => dong.id === id
      );

      // Món đã có -> tăng số lượng
      if (monDaCo) {
        return gioCu.map((dong) =>
          dong.id === id
            ? {
                ...dong,
                soLuong: dong.soLuong + 1,
              }
            : dong
        );
      }

      // Món chưa có -> thêm mới
      return [
        ...gioCu,
        {
          id,
          soLuong: 1,
        },
      ];
    });
  }

  // Xóa toàn bộ giỏ hàng
  function xoaGioHang() {
    setGio([]);
  }

  // Gửi đơn
  function guiDon(thongTin) {
    setThongBao(
      `Đã nhận đơn của ${thongTin.hoTen}`
    );

    // Làm rỗng giỏ
    setGio([]);

    // Đổi key để FormDatMon được tạo lại
    // => state của form trở về giá trị ban đầu
    setFormKey((keyCu) => keyCu + 1);
  }

  return (
    <>
      <Header tongPhan={tongPhan} />

      <main>
        {/* THỰC ĐƠN */}
        <DanhSachMon
          dsMon={dsMon}
          idDangChon={idDangChon}
          onChon={setIdDangChon}
          onDat={datMon}
        />

        {/* GIỎ HÀNG */}
        <Khung
          tieuDe="Giỏ hàng"
          hanhDong={
            <button
              type="button"
              onClick={xoaGioHang}
            >
              Xóa giỏ hàng
            </button>
          }
        >
          <GioHang
            gio={gio}
            dsMon={dsMon}
          />
        </Khung>

        {/* FORM ĐẶT MÓN */}
        <Khung tieuDe="Thông tin nhận món">
          <FormDatMon
            key={formKey}
            onGui={guiDon}
            choPhepGui={gio.length > 0}
          />
        </Khung>

        {/* THÔNG BÁO THÀNH CÔNG */}
        {thongBao && (
          <p role="status">
            {thongBao}
          </p>
        )}
      </main>
    </>
  );
}

export default App;