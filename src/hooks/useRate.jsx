import { useEffect, useState } from "react";

function useRate() {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRate = () => {
    setLoading(true);
    fetch(
      `https://bankofgeorgia.ge/api/currencies/convert/GEL/USD?amountFrom=100`
    )
      .then((res) => {
        if (!res.ok) throw Error("Failed To Fetch Data");
        return res.json();
      })
      .then((data) => setRate(1 / data.data.rate.toFixed(2)))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => fetchRate(), []);

  return { rate, loading, error };
}

export default useRate;
