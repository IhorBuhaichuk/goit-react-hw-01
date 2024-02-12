import style from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th className={style.column}>Type</th>
          <th className={style.column}>Amount</th>
          <th className={style.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <tr className={style.row} key={el.id}>
            <td className={style.rowData}>{el.type}</td>
            <td className={style.rowData}>{el.amount}</td>
            <td className={style.rowData}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}