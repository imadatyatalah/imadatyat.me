// Source: https://github.com/leerob/leerob.io/blob/ea39018373503d79bdb99f7d072e8ed936f9cf24/components/ViewCounter.tsx

import React, { useEffect } from "react";

import useSWR from "swr";

import fetcher from "@/lib/fetcher";

import type { Views } from "@/types/Views";

const ViewCounter = ({ slug }: { slug: string }) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : "–––"} views`}</span>;
};

export default ViewCounter;
