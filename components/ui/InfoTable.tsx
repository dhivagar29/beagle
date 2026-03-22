interface InfoTableColumn {
  key: string;
  header: string;
  className?: string;
}

interface InfoTableProps {
  columns: InfoTableColumn[];
  rows: Record<string, React.ReactNode>[];
  caption?: string;
  className?: string;
}

export default function InfoTable({
  columns,
  rows,
  caption,
  className = "",
}: InfoTableProps) {
  return (
    <div
      className={[
        "overflow-x-auto rounded-xl border border-beagle-cream-dark shadow-warm",
        className,
      ].join(" ")}
    >
      <table className="w-full border-collapse text-sm">
        {caption && (
          <caption className="mb-2 text-left text-xs font-medium text-beagle-brown">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-beagle-cream-dark bg-beagle-cream-dark">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={[
                  "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-beagle-brown-dark",
                  col.className ?? "",
                ].join(" ")}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={[
                "border-b border-beagle-cream-dark transition-colors last:border-b-0",
                rowIdx % 2 === 0
                  ? "bg-beagle-cream"
                  : "bg-beagle-cream-dark/40",
              ].join(" ")}
            >
              {columns.map((col, colIdx) => {
                const Cell = colIdx === 0 ? "th" : "td";
                return (
                  <Cell
                    key={col.key}
                    scope={colIdx === 0 ? "row" : undefined}
                    className={[
                      "px-4 py-3 text-beagle-espresso",
                      colIdx === 0 ? "font-medium text-beagle-brown-dark" : "",
                      col.className ?? "",
                    ].join(" ")}
                  >
                    {row[col.key]}
                  </Cell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
