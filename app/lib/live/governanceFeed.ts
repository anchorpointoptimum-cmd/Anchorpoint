import {
  emitSignal,
} from "./signalBus";

/* =========================================================
   GOVERNANCE FEED
========================================================= */

export function pushGovernanceEvent(
  type: string,
  severity: string,
  source: string,
  payload?: unknown
) {

  emitSignal({

    id:
      crypto.randomUUID(),

    type,

    severity,

    source,

    payload,

    timestamp:
      new Date().toISOString(),

  });

}