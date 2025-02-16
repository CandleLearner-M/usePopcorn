import { useEffect, useState } from "react";

type Currency = "EUR" | "INR" | "USD" | "CAD";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string | number>("");
  const [from, setFrom] = useState<Currency>("INR");
  const [to, setTo] = useState<Currency>("USD");
  const [result, setResult] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const convertionResult = async () => {
      try {
        if (!amount) return;
        setIsLoading(true)
        const res = await fetch(
          ` https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();

        setResult(data.rates[to]);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
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
        <option value="INR">INR</option>
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
        <option value="INR">INR</option>
        <option value="CAD">CAD</option>
      </select>
      <p>{isLoading ? 'Processing...' : result}</p>
    </div>
  );
}

// https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD
