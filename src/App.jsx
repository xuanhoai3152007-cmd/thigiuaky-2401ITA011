import { useState } from "react";
import Header from "./components/Header";
import DanhSachMon from "./components/DanhSachMon";
import GioHang from "./components/GioHang";

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
    moTa: "Chè bắp ngọt dịu",
    gia: 25000,
    daHet: true,
  },
  {
    id: 8,
    ten: "Tôm chua",
    moTa: "Tôm chua đặc sản Huế",
    gia: 50000,
    daHet: false,
  },
];

function App() {
  const [gio, setGio] = useState([]);
  const [idDangChon, setIdDangChon] = useState(null);

  const datMon = (id) => {
    setGio((gioCu) => {
      const daCo = gioCu.find((item) => item.id === id);

      if (daCo) {
        return gioCu.map((item) =>
          item.id === id
            ? {
                ...item,
                soLuong: item.soLuong + 1,
              }
            : item
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
  };

  const tongPhan = gio.reduce(
    (tong, item) => tong + item.soLuong,
    0
  );

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

        <GioHang
          gio={gio}
          dsMon={dsMon}
        />
      </main>
    </>
  );
}

export default App;