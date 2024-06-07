import {SiteConfig} from "../utils/site.config";
import Balancer from 'react-wrap-balancer'
export const FeatureTable = () => {
    return (
        <table className="table-auto border-collapse w-full">
            <thead>
                <tr className={"border-b py-4 my-4 border-zinc-200/20"}>
                    <th className="text-left pl-3 pb-3">Feature</th>
                    <th className="text-left pl-3 pb-3">Description</th>
                </tr>

            </thead>

            <tbody>
                {SiteConfig.features.map((feature, i) => {
                    return (
                        <tr key={i} className={"p-4 border-b border-zinc-200/20"}>
                            <td className="py-2 text-start items-start flex justify-start"><a target={"_blank"} href={feature.href} className={"pl-2 pt-1 pb-2 pr-3  hover:underline-offset-4 hover:underline hover:decoration-dashed hover:decoration-[var(--rp-c-brand)]/40 text-[var(--rp-c-brand)] hover:text-zinc-100 transition-all"}><Balancer>{feature.title}</Balancer></a></td>
                            <td className=" items-start"><p className={"pl-3 align-text-top justify-start flex items-start"}>{feature.description}</p></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}