import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { supportedBrowser } from "../lib/site.config";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function SupportedBrowser() {
  return (
    <div className="px-10 py-4">
      <Table>
        <TableCaption className="text-start">
          While the extension may also function on other Chromium-based browsers
          such as Microsoft Edge, Brave, Vivaldi, and Opera, please be aware
          that these are not officially supported.{" "}
          <i>
            <strong>
              For best user experience, we highly recommend you to use Google
              Chrome.
            </strong>
          </i>{" "}
          We are not responsible for any issues that may arise, and currently,
          we do not provide support for these platforms.
        </TableCaption>
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
