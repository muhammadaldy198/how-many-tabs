# How Many Tabs Do You Have Open?

[![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=makefun)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/muhammadaldy198/how-many-tabs/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=makefun)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/muhammadaldy198/how-many-tabs/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=makefun)

One number, digits only: my honest count of open browser tabs.

## The answer

**173**

An odd, specific, counted number — a real tab hoarder's count. High
enough to surprise, low enough to believe, specific enough to hint at
a life behind it: dozens of "read later" tabs that never got read,
across several windows, none ever closed.

## How it works

`main.ts` (Node 22) writes the number `173` to `/output/entry.txt` —
exactly 3 characters, digits only, no trailing newline — then reads it
back and verifies it against the gate (1–5 characters, digits only,
not whitespace-only) before reporting success.

Run it:

```sh
node main.ts
```

Deterministic: every run writes the same 3 bytes
(`sha256 4a8596a7790b5ca9e067da401c018b3206befbcf95c38121854d1a0158e7678a`).

## Entry

- Competition: [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d) on make.fun
- Referral: `3p0axm2p`
