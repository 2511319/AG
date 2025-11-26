import * as React from "react"
import { cn } from "../../lib/utils"

interface Column<T> {
    header: string
    accessorKey: keyof T
    cell?: (item: T) => React.ReactNode
    className?: string
}

interface RPGTableProps<T> {
    data: T[]
    columns: Column<T>[]
    onRowClick?: (item: T) => void
    className?: string
}

export function RPGTable<T>({ data, columns, onRowClick, className }: RPGTableProps<T>) {
    return (
        <div className={cn("w-full overflow-hidden rounded-lg border-2 border-fantasy-700 bg-fantasy-900/50 shadow-inner", className)}>
            <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-fantasy-800 text-fantasy-gold border-b-2 border-fantasy-700">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className={cn("px-4 py-3 font-serif tracking-wider", col.className)}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIdx) => (
                        <tr
                            key={rowIdx}
                            onClick={() => onRowClick?.(item)}
                            className={cn(
                                "border-b border-fantasy-800/50 transition-colors",
                                rowIdx % 2 === 0 ? "bg-fantasy-900/30" : "bg-fantasy-900/10",
                                onRowClick ? "cursor-pointer hover:bg-fantasy-700/30 hover:text-fantasy-100" : ""
                            )}
                        >
                            {columns.map((col, colIdx) => (
                                <td key={colIdx} className={cn("px-4 py-3 font-medium text-fantasy-300", col.className)}>
                                    {col.cell ? col.cell(item) : (item[col.accessorKey] as React.ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
