function dinhDangGia(gia) {
  return gia.toLocaleString("vi-VN") + " đ";
}

function MonAnCard({ mon, dangChon, onChon, onDat }) {
  return (
    <article
      className={dangChon ? "dang-chon" : ""}
      onClick={() => onChon(mon.id)}
    >
      <h3>{mon.ten}</h3>

      <p>{mon.moTa}</p>

      <p>{dinhDangGia(mon.gia)}</p>

      {mon.daHet && (
        <span className="het-mon">Hết món</span>
      )}

      <button
        disabled={mon.daHet}
        onClick={(e) => {
          e.stopPropagation();
          onDat(mon.id);
        }}
      >
        Đặt món
      </button>
    </article>
  );
}

export default MonAnCard;