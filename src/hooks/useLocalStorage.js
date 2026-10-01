import { useEffect, useState } from "react";

function useLocalStorage(khoa, giaTriDau) {
  const [giaTri, setGiaTri] = useState(() => {
    try {
      const duLieu = localStorage.getItem(khoa);

      if (duLieu === null) {
        return giaTriDau;
      }

      return JSON.parse(duLieu);
    } catch {
      return giaTriDau;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      khoa,
      JSON.stringify(giaTri)
    );
  }, [khoa, giaTri]);

  return [giaTri, setGiaTri];
}

export default useLocalStorage;