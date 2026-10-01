import MonAnCard from "./monancard";

function DanhSachMon({
  dsMon,
  idDangChon,
  onChon,
  onDat,
}) {
  return (
    <section>
      <h2>Thực đơn</h2>

      <div>
        {dsMon.map((mon) => (
          <MonAnCard
            key={mon.id}
            mon={mon}
            dangChon={idDangChon === mon.id}
            onChon={onChon}
            onDat={onDat}
          />
        ))}
      </div>
    </section>
  );
}

export default DanhSachMon;