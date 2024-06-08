import { supportedBrowser } from "../utils/site.config";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export default function SupportedBrowser() {
  return (
    <div className="px-10 py-4">
      <Table>
        <TableCaption>We support Chromium based browsers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Browser</TableHead>
            <TableHead className="text-center">Supported</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supportedBrowser.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right items-center flex justify-center">
                {item.supported ? (
                  <CheckCircledIcon className="text-emerald-500" />
                ) : (
                  <CrossCircledIcon className="text-red-400" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
