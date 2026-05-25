"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  GovernanceSignal,
  subscribeToSignals,
} from "@/app/lib/live/signalBus";

/* =========================================================
   HOOK
========================================================= */

export function useGovernanceSignals() {

  const [
    signals,
    setSignals,
  ] = useState<
    GovernanceSignal[]
  >([]);

  useEffect(() => {

    const unsubscribe =
      subscribeToSignals(
        (signal) => {

          setSignals(
            (previous) => [

              signal,

              ...previous,

            ]
          );

        }
      );

    return () =>
      unsubscribe();

  }, []);

  return signals;

}