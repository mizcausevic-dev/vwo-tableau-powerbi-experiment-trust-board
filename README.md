# VWO Tableau Power BI Experiment Trust Board

Experiment trust board for VWO decisions, Tableau lineage, and Power BI executive metric confidence.

![ci](https://github.com/mizcausevic-dev/vwo-tableau-powerbi-experiment-trust-board/actions/workflows/ci.yml/badge.svg)

## Why this exists

This is a Kinetic Gain signal surface for VWO, Tableau, Power BI. It turns fragmented operational facts into board-ready questions:

- Where are we exposed?
- Where can we save money?
- Where should we invest?
- What story do we tell with evidence?

## Signal lanes

- experiment integrity
- holdout trust
- dashboard lineage
- semantic model confidence
- revenue lift evidence
- board readout readiness

## Stack signal

- Primary language signal: TypeScript
- Vertical: Revenue Operations / Data Engineering
- Portfolio family: VWO + Tableau + Power BI
- Live surface: https://mizcausevic-dev.github.io/vwo-tableau-powerbi-experiment-trust-board/

## Local verification

~~~bash
npm test
~~~

The validation script checks the generated evidence payload and confirms the static board surface exists.
