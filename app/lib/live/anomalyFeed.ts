import {
  pushGovernanceEvent,
} from "./governanceFeed";

/* =========================================================
   ANOMALY EVENT
========================================================= */

export function emitAnomalyEvent(
  anomaly: string,
  severity: string
) {

  pushGovernanceEvent(

    "ANOMALY_DETECTED",

    severity,

    "Operational Intelligence Layer",

    {

      anomaly,

    }

  );

}