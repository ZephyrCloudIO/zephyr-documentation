import React from "react";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
const name = " ZEPHYR ";
const userName = "zackary_chapple_zephyrcloud_io";
const appId = "create-mf-app.createmf-app.zephyrcloudio";
const version = "338";

function getRandomSixDigit() {
  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}
const randomSixDigit = getRandomSixDigit();

export const ZephyrInfo = () => {
  return (
    <div className="flex flex-col font-mono space-y-1 text-sm">
      <code>&gt; npm run build</code>
      <div className="inline-flex gap-2  items-center">
        <Badge variant="secondary" />
        <Progress value={6} />
        <p className="text-xs">(6%)</p>
        <p className="text-zinc-400">setup before compile</p>
      </div>
      <div className="inline-flex gap-2  items-center">
        <Badge>{name}</Badge>
        <span>
          Hi <span className="text-cyan-500">{userName}</span>!
        </span>
      </div>
      <div className="inline-flex gap-2 items-center">
        <Badge>{name}</Badge>
        <span>
          Building to <span className="text-cyan-500">{appId}</span>
          <span className="text-amber-100">#{version}</span>
        </span>
      </div>
      <div className="inline-flex gap-2  items-center">
        <Badge variant="secondary" />
        <Progress value={59} />
        <p className="text-xs">(59%)</p>
        <p className="text-zinc-400">
          building css|node_modules/postcss-loader/dist/cjs.js??ruleSet[1]
        </p>
      </div>
      <div className="inline-flex gap-2  items-center">
        <Badge variant="secondary" />
        <Progress value={62} />
        <p className="text-xs">(62%)</p>
        <p className="text-zinc-400">sealing finish modules</p>
      </div>
      <div className="inline-flex gap-2 items-center">
        <Badge>{name}</Badge>
        <p>uploading missing assets to zephyr (queued 2 out of 7)</p>
      </div>
      <div className="inline-flex gap-2 items-center">
        <Badge>{name}</Badge>
        <p>
          Uploaded missing assets to zephyr (
          <span className="text-amber-100">2</span> assets in{" "}
          <span className="text-amber-100">300</span>ms,{" "}
          <span className="text-amber-100">5.74</span>kb)
        </p>
      </div>
      <div className="inline-flex gap-2  items-center">
        <Badge variant="secondary" />
        <Progress value={98} />
        <p className="text-xs">(98%)</p>
        <p className="text-zinc-400">emitting emit</p>
      </div>
      <div className="inline-flex gap-2 items-center">
        <Badge>{name}</Badge>
        <p>
          Uploaded <span className="text-emerald-300">local</span> snapshot in{" "}
          <span className="text-amber-100">193</span>ms.
        </p>
      </div>
      <div className="inline-flex gap-2 items-center">
        <Badge>{name}</Badge>
        <p>
          Build deployed in
          <span className="text-amber-100"> 195</span>ms.
        </p>
      </div>
      <div className="inline-flex gap-2 items-start">
        <Badge>{name}</Badge>
        <p>
          Deployed to edge: <Badge>{name}</Badge> -&gt;
          <span className="text-cyan-300">
            {" "}
            https://{userName}
            {appId}.zephyrcloud.xyz
          </span>
        </p>
      </div>
      <div className="inline-flex gap-2  items-center">
        <Badge variant="secondary" />
        <Progress value={100} />
        <p className="text-xs">(100%)</p>
        <p className="text-zinc-400">done</p>
      </div>
      <p className="text-xs">
        Rspack compiled <span className="text-emerald-300">successfully</span>{" "}
        in 892ms
      </p>
    </div>
  );
};
