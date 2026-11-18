# WordFlip

Learn 50 everyday Spanish words with reversible flashcards and review intervals based on recall.

Keep a small review queue next to your keyboard. Missing a word puts it back in a minute, while words you recall easily stop using up time in the same session.

## Test a word before looking

1. Read the language direction above the prompt. **ES > EN** asks for the English word. Say your answer before clicking the wheel.
2. Click to reveal the other side of the card. In the clip, `agua` turns over to `water` and the proposed rating is **Good**.
3. Turn the wheel only if you want a different rating. Clicking again records the selected rating and advances.

![The Spanish prompt agua becomes water under RATE: Good.](media/guide/reveal-water.gif)

## Bring a missed word back soon

1. With the answer showing, turn to **Again** if you had to guess. Click to put that card back in the queue for one minute later.
2. Continue with the next prompt. Here the next Spanish word is `pan`. While the answer is hidden, turning the wheel lets you browse other due cards.
3. Press **Start** to reverse the language direction. The schedule is attached to the card, so changing sides retains its review history.

![The rating changes to Again and the next Spanish prompt is pan.](media/guide/grade-and-advance.gif)

## How the review intervals work

There are 50 English–Spanish word pairs. A fresh card graded **Good** comes back in two days. **Easy** starts at four days. Later **Good** reviews double the previous interval and **Easy** reviews multiply it by four, up to 45 days. **Again** restarts the interval at one minute.

When every card is scheduled for the future, the rear shows the wait until the next review. Click to check again when it is due. The review journal and selected direction are saved locally.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
