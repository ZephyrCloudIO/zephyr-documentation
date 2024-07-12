import { supportedFramework, supportedBundler } from '../lib/site.config';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { HammerIcon } from './icons/hammer';

export function Supported({ items }: { items: typeof supportedFramework | typeof supportedBundler }) {
  return (
    <div className="px-10 py-4">
      <Table>
        <TableCaption className="text-start">
          <div className="flex gap-4">
            <span><CheckCircledIcon className='text-emerald-500' />: Currently supported</span>
            <span><HammerIcon className='text-red-500' />: Under development</span>
          </div>

        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Browser</TableHead>
            <TableHead className="text-center">Supported</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right items-center flex justify-center">
                {item.supported === 'prod' ? (
                  <CheckCircledIcon className="text-emerald-500" />
                ) : (
                  <HammerIcon className="text-red-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const SupportedFramework = () => {
  return (
    <Supported items={supportedFramework} />
  )
}

export const SupportedBundler = () => {
  return (
    <Supported items={supportedBundler} />
  )
}
