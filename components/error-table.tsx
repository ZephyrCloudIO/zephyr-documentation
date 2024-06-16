import { Errors } from '../lib/error';
import { Links } from '../lib/site.config';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export const ErrorTable = () => {
  return (
    <Table>
      <TableCaption className="text-start">
        Not seeing the error you are looking for?{' '}
        <a href={Links.discord}>Talk to us</a>.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Code</TableHead>
          <TableHead className="text-start">Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Errors.build.map((item, index) => (
          <TableRow key={index}>
            {' '}
            <TableCell className="font-medium">
              <code>{item.code}</code>
            </TableCell>{' '}
            <TableCell className=" text-left items-start flex justify-start">
              <a
                href={item.link}
                className="decoration-dashed decoration-[0.4px] underline underline-offset-4 hover:text-[var(--rp-c-brand)] hover:decoration-[var(--rp-c-brand)] transition-all w-full max-h-full"
              >
                {' '}
                {item.name}{' '}
              </a>{' '}
            </TableCell>{' '}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
