import { articleResource, videoResource } from '../lib/resource';
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
export const VideoResource = () => {
  return (
    <div>
      <Table>
        <TableCaption>
          Adding more video resource? Open PR{' '}
          <a className="underline underline-offset-4" href={Links.github}>
            here
          </a>
          .
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[35%]">Content</TableHead>
            <TableHead className="w-[15%]">Author</TableHead>
            <TableHead className="w-[50%]">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {videoResource.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <a href={item.href} className="underline underline-offset-4">
                  {item.title}
                </a>
              </TableCell>
              <TableCell>
                <a href={item.twitter} className="text-[var(--rp-c-brand)] ">
                  {item.author}
                </a>
              </TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const BlogPosts = () => {
  return (
    <div>
      <Table>
        <TableCaption>
          Adding more blogs? Open PR{' '}
          <a href={Links.github} className="underline underline-offset-4">
            here
          </a>
          .
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[35%]">Content</TableHead>
            <TableHead className="w-[15%]">Author</TableHead>
            <TableHead className="w-[50%]">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articleResource.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <a href={item.href} className="underline underline-offset-4">
                  {item.title}
                </a>
              </TableCell>
              <TableCell>
                <a href={item.twitter} className="text-[var(--rp-c-brand)] ">
                  {item.author}
                </a>
              </TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
