import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExcelTableProps {
  /** Pfad relativ zu public/, z. B. "downloads/KI-Tools-Matrix-2026.xlsx" */
  filePath: string;
  downloadHref: string;
  downloadFileName: string;
}

export function ExcelTable({
  filePath,
  downloadHref,
  downloadFileName,
}: ExcelTableProps) {
  let rows: string[][] = [];

  try {
    const absolutePath = path.join(process.cwd(), "public", filePath);
    const buffer = fs.readFileSync(absolutePath);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const raw = XLSX.utils.sheet_to_json<string[]>(sheet, {
      header: 1,
      defval: "",
    });
    rows = raw.map((row) => row.map((cell) => String(cell ?? "")));
  } catch {
    return (
      <p className="text-sm text-slate-400">
        Tabelle konnte nicht geladen werden.
      </p>
    );
  }

  if (rows.length === 0) {
    return <p className="text-sm text-slate-400">Keine Daten vorhanden.</p>;
  }

  const [headers, ...dataRows] = rows;
  const colCount = headers.length;

  return (
    <div>
      {/* Scrollbare Tabelle */}
      <div
        className="w-full overflow-auto border border-slate-200"
        style={{ maxHeight: "70vh" }}
      >
        <table className="min-w-max w-full border-collapse text-sm">
          <thead className="sticky top-0 z-10">
            <tr>
              {headers.map((header, ci) => (
                <th
                  key={ci}
                  className="bg-primary px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white border-r border-white/20 last:border-r-0 align-top"
                  style={{ minWidth: "150px", maxWidth: "300px", whiteSpace: "normal", wordBreak: "break-word" }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                {Array.from({ length: colCount }, (_, ci) => (
                  <td
                    key={ci}
                    className="px-4 py-2.5 text-slate-700 align-top border-t border-slate-100 border-r border-slate-100 last:border-r-0"
                    style={{ minWidth: "150px", maxWidth: "300px", whiteSpace: "normal", wordBreak: "break-word" }}
                  >
                    {row[ci] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download-Button */}
      <div className="mt-6">
        <Button
          asChild
          variant="outline"
          className="rounded-md border-2 border-[#5F94D6] text-[#5F94D6] hover:bg-[#5F94D6] hover:text-white"
        >
          <a href={downloadHref} download={downloadFileName}>
            <Download className="mr-2 h-4 w-4" aria-hidden="true" />
            Als Excel herunterladen
          </a>
        </Button>
      </div>
    </div>
  );
}
