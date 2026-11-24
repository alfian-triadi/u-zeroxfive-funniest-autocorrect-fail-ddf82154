# Funniest Autocorrect Fail

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/c/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/alfian-triadi/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/c/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/alfian-triadi/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/c/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Entry for the [Funniest Autocorrect Fail](https://make.fun/c/u-zeroxfive-funniest-autocorrect-fail-ddf82154) competition on [make.fun](https://make.fun).

## The entry

> I meant to text my date 'can't wait to see you' — autocorrect sent 'can't wait to sue you.'

91 characters, one line.

## How it works

`main.ts` (Node 22, no dependencies) writes the entry line to `/output/entry.txt`. It validates the entry first — 1–199 characters, not only whitespace, single line — then reads the file back to confirm a byte-identical round trip.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
