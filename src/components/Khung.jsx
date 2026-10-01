function Khung({ tieuDe, hanhDong, children }) {
  return (
    <section>
      <div className="tieu-de-khung">
        <h2>{tieuDe}</h2>

        {hanhDong}
      </div>

      {children}
    </section>
  );
}

export default Khung;