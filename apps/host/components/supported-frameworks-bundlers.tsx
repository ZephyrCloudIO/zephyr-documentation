import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import {
  supportedBundler,
  supportedCloud,
  supportedFramework,
} from "../lib/site.config";
import { HammerIcon } from '@zephyr-docs/shared';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@zephyr-docs/shared';

export function Supported({
  items,
}: {
  items: typeof supportedFramework | typeof supportedBundler;
}) {
  return (
    <div className="px-10 py-4">
      <Table>
        <TableCaption className="text-start">
          <div className="flex gap-4 items-center">
            <span className="inline-flex items-center gap-2">
              <CheckCircledIcon className="text-emerald-500 h-3 w-3" />
              <p className="text-xs">Currently supported</p>
            </span>
            <span className="inline-flex items-center gap-2">
              <HammerIcon className="text-red-500 h-3 w-3" />
              <p className="text-xs">Under development</p>
            </span>
          </div>
        </TableCaption>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right items-center flex justify-center">
                {item.supported === "prod" ? (
                  <CheckCircledIcon className="text-emerald-500 h-4 w-4" />
                ) : (
                  <HammerIcon className="text-red-500 h-4 w-4" />
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
  return <Supported items={supportedFramework} />;
};

export const SupportedBundler = () => {
  return <Supported items={supportedBundler} />;
};

export const SupportedCloud = () => {
  return <Supported items={supportedCloud} />;
};
