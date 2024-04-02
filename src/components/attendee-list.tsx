import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 text-sm ">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none focus:ring-0"
            placeholder="Buscar participante..."
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 64 }}>
              <input
                type="checkbox"
                className="size-4 cursor-pointer rounded border border-white/10 bg-black/20 checked:text-orange-400 focus:ring-0 focus:ring-offset-0"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 cursor-pointer rounded border border-white/10 bg-black/20 checked:text-orange-400 focus:ring-0 focus:ring-offset-0"
                  />
                </TableCell>
                <TableCell>123456</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Riad Younes
                    </span>
                    <span>riad@treeid.com.br</span>
                  </div>
                </TableCell>
                <TableCell>7 days ago</TableCell>
                <TableCell>7 days ago</TableCell>
                <TableCell>
                  <IconButton
                    transparent
                    className="rounded-md border border-white/10 bg-black/20 p-1.5"
                  >
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 228 items</TableCell>
            <TableCell
              className="px-4 py-3 text-right text-sm text-zinc-300"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Paginação 1 de 10</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
