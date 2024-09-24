"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import config from "../../puck.config";
import { Puck } from "@measured/puck";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Client({ data, path }: { data: Partial<Data>; path: string }) {
  return (
    <Puck
      config={config}
      data={data}
      onPublish={async (data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
