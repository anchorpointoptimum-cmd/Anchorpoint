/* =========================================================
   SIGNAL TYPES
========================================================= */

export interface GovernanceSignal {

  id: string;

  type: string;

  severity: string;

  timestamp: string;

  source: string;

  payload?: unknown;

}

/* =========================================================
   SIGNAL SUBSCRIBERS
========================================================= */

type SignalCallback =
  (
    signal: GovernanceSignal
  ) => void;

const subscribers =
  new Set<SignalCallback>();

/* =========================================================
   SUBSCRIBE
========================================================= */

export function subscribeToSignals(
  callback: SignalCallback
) {

  subscribers.add(callback);

  return () => {

    subscribers.delete(callback);

  };

}

/* =========================================================
   EMIT SIGNAL
========================================================= */

export function emitSignal(
  signal: GovernanceSignal
) {

  subscribers.forEach(
    (callback) =>
      callback(signal)
  );

}