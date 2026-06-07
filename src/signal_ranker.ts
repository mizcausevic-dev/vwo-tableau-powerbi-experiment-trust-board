export type Signal = { lane: string; exposure: number; savings: number; invest: number; boardStory: string };

export const signals: Signal[] = [
  { lane: "VWO holdout integrity", exposure: 72, savings: 18, invest: 63, boardStory: "Do not scale experiments until audience splits and treatment leakage are explainable." },
  { lane: "Tableau source certification", exposure: 61, savings: 21, invest: 57, boardStory: "Only certified workbook sources should feed executive experiment readouts." },
  { lane: "Power BI semantic parity", exposure: 67, savings: 16, invest: 59, boardStory: "Board KPIs need parity with the VWO lift definition before budget decisions." }
];

export function rankSignals(input: Signal[] = signals) {
  return input
    .map((signal) => ({ ...signal, priority: Math.round(signal.exposure * 0.45 + signal.savings * 0.25 + signal.invest * 0.3) }))
    .sort((left, right) => right.priority - left.priority);
}

console.log(JSON.stringify({ repo: "vwo-tableau-powerbi-experiment-trust-board", ranked: rankSignals() }, null, 2));
