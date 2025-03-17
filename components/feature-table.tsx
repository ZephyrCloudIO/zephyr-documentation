import Balancer from "react-wrap-balancer";
import { SiteConfig } from "../lib/site.config";
export const FeatureTable = () => {
  return (
    <table className="w-full border-collapse table-auto">
      <thead>
        <tr className={"border-b py-4 my-4 border-zinc-200/20"}>
          <th className="pb-3 pl-3 text-left">Feature</th>
          <th className="pb-3 pl-3 text-left">Description</th>
        </tr>
      </thead>

      <tbody>
        {SiteConfig.features.map((feature, i) => {
          return (
            <tr key={i} className={"p-4 border-b border-zinc-200/20"}>
              <td className="flex items-start justify-start py-2 text-start">
                <p
                  className={
                    "pl-2 pt-1 pb-2 pr-3  hover:underline-offset-4 hover:underline hover:decoration-dashed hover:decoration-[var(--rp-c-brand)]/40 text-[var(--rp-c-link)] hover:text-[--rp-c-background] transition-all"
                  }
                >
                  <Balancer>{feature.title}</Balancer>
                </p>
              </td>
              <td className="items-start ">
                <p
                  className={
                    "pl-3 align-text-top justify-start flex items-start"
                  }
                >
                  {feature.description}
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
