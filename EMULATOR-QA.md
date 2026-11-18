# Firmware verification

BUSY Bar Emulator 0.1.0-beta.5, firmware 1.3.1.

Tested the 50-card English/Spanish deck on firmware. Clicking revealed the translation, wheel selected Again, and clicking recorded a one-minute review. Reversing direction displayed Spanish prompts. Restart restored one studied card and 49 due cards. Back exited cleanly.

The app was typechecked, built, installed and exercised on the emulator. Native captures are under screenshots/. The tested installable archive is in packages/.

Firmware motion pass: ok, down, ok. 17 distinct frames in the controls recording. App io.ncoooooper.wordflip exited: finished; heap peak 85.0 of 128 KiB.

## Display capture

Firmware 1.3.1 rendered both README examples. Each square in a guide GIF is one front LED in a 16 × 16 cell. The production archive was built from the source in this repository.

## Screen transition capture

Firmware 1.3.1 rendered the display sequences in the README. The release archive also ran on a fresh emulator with rapid wheel reversals and Back during a transition. The guide uses a 14 × 14 lit area inside each 16 × 16 cell. Input sequences, frame counts and the release archive checksum are in [the capture record](media/screen-transitions.json).
