# Firmware verification

BUSY Bar Emulator 0.1.0-beta.5, firmware 1.3.1.

Tested the 50-card English/Spanish deck on firmware. Clicking revealed the translation, wheel selected Again, and clicking recorded a one-minute review. Reversing direction displayed Spanish prompts. Restart restored one studied card and 49 due cards. Back exited cleanly.

The app was typechecked, built, installed and exercised on the emulator. Native captures are under screenshots/. The tested installable archive is in packages/.

Firmware motion pass: ok, down, ok. 17 distinct frames in the controls recording. App io.ncoooooper.wordflip exited: finished; heap peak 85.0 of 128 KiB.
