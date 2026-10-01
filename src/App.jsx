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

  const [gio, setGio] = useLocalStorage("gio-hang", []);
  const [idDangChon, setIdDangChon] = useState(null);
  const [thongBao, setThongBao] = useState("");
  const [formKey, setFormKey] = useState(0);

  const tongPhan = gio.reduce(
    (tong, dong) => tong + dong.soLuong,
    0
  );

  useEffect(() => {
    if (tongPhan === 0) {
      document.title = tenQuan;
    } else {
      document.title = `(${tongPhan}) ${tenQuan}`;
    }
  }, [tongPhan, tenQuan]);

  function datMon(id) {
    setGio((gioCu) => {
      const monDaCo = gioCu.find((dong) => dong.id === id);

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

      return [
        ...gioCu,
        {
          id,
          soLuong: 1,
        },
      ];
    });
  }

  function xoaGioHang() {
    setGio([]);
  }

  function guiDon(thongTin) {
    setThongBao(`Đã nhận đơn của ${thongTin.hoTen}`);

    setGio([]);

    setFormKey((keyCu) => keyCu + 1);
  }

  return (
    <>
      <Header tongPhan={tongPhan} />

      <main>
        <DanhSachMon
          dsMon={dsMon}
          idDangChon={idDangChon}
          onChon={setIdDangChon}
          onDat={datMon}
        />

        <Khung
          tieuDe="Giỏ hàng"
          hanhDong={
            <button type="button" onClick={xoaGioHang}>
              Xóa giỏ hàng
            </button>
          }
        >
          <GioHang gio={gio} dsMon={dsMon} />
        </Khung>

        <Khung tieuDe="Thông tin nhận món">
          <FormDatMon
            key={formKey}
            onGui={guiDon}
            choPhepGui={gio.length > 0}
          />
        </Khung>

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