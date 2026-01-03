import { useEffect, useState } from "react";

export default function Table() {
  const [count, setCount] = useState(0);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    // Only run when count changes
    if (count > 0) {
      const rows = [];

      for (let i = 1; i <= 10; i++) {
        rows.push({
          multiplier: i,
          result: i * count,
        });
      }

      setTableRows(rows);
    }
  }, [count]);

  function afterCount() {
    setCount(count + 1);
    console.log("after incrementing");
  }

  return (
    <>
      <h1>Hello from Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={afterCount}>Count</button>

      {count > 0 && (
        <table border="1" style={{ marginTop: "20px", width: "300px" }}>
          <thead>
            <tr>
              <th>Multiplier</th>
              <th>Result ({count} × i)</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td>{row.multiplier}</td>
                <td>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
