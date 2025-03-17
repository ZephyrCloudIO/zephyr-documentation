import { useNavigate } from "rspress/runtime";
import { Categories, Errors } from "../../lib/error-codes-messages";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function ErrorTables({
  category,
}: {
  category: keyof typeof Categories;
}) {
  if (!(category in Categories)) {
    throw new Error(`Invalid category: ${category}`);
  }

  const navigate = useNavigate();

  const errors = Object.entries(Errors).filter(
    ([, error]) => error.kind === category,
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] pl-6">Code</TableHead>
          <TableHead className="text-start">Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {errors.map(([name, error]) => (
          <TableRow
            key={error.id}
            className="hover:cursor-pointer hover:bg-[var(--rp-c-bg-soft)]"
            onClick={() =>
              navigate(`/errors/ze${Categories[category]}${error.id}`)
            }
          >
            <TableCell className="font-medium">
              <code>
                ZE{Categories[category]}
                {error.id}
              </code>
            </TableCell>
            <TableCell className="text-left items-start flex justify-start">
              <div>
                <div className="mb-2 hover:text-[var(--rp-c-brand)] hover:decoration-[var(--rp-c-brand)] ">
                  {name.replace(/_/g, " ")}
                </div>
                <div>{error.message}</div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
