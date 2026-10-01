import Header from "./components/Header";
import DanhSachMon from "./components/DanhSachMon";

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
  return (
    <>
      <Header tongPhan={0} />

      <main>
        <DanhSachMon
          dsMon={dsMon}
          idDangChon={null}
          onChon={() => {}}
          onDat={() => {}}
        />
      </main>
    </>
  );
}

export default App;