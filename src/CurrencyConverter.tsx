import { useEffect, useState } from "react";

type Currency = "EUR" | "MAD" | "USD" | "CAD";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string | number>("");
  const [from, setFrom] = useState<Currency>("MAD");
  const [to, setTo] = useState<Currency>("USD");

  useEffect(() => {
    const convertionResult = async () => {
      try {
        if (!amount) return;
        const res = await fetch(
          ` https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();

        console.log(data);

      } catch (error) {
        console.error(error)
      }
    };

    convertionResult();
  }, [amount, from, to]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
      />
      <select
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value as Currency)}
      >
        <option value="EUR">Euro</option>
        <option value="USD">Dollar</option>
        <option value="MAD">MAD</option>
        <option value="CAD">CAD</option>
      </select>
      <select
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value as Currency)}
      >
        <option value="EUR">Euro</option>
        <option value="USD">Dollar</option>
        <option value="MAD">MAD</option>
        <option value="CAD">CAD</option>
      </select>
      <p>Output</p>
    </div>
  );
}

// https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD
