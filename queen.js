"use strict";

//		javascript code
//		script_name:
//
//		author:
//		description:
//

init();
setTempo(120);

/*INTRO*/
fitMedia(RD_EDM_CHORDPART_3, 1, 1, 13);
fitMedia(RD_EDM_CHORDPART_1, 2, 5, 33);
fitMedia(RD_EDM_DRUMBEATPART_3, 3, 9, 33);
// oh
var vocalizeBeat = "--0-------------";
var vocalizeSound = "COMMON_LOVE_VOX_ADLIB_3"
for (var i = 9; i < 13; i++) {
  makeBeatSlice(vocalizeSound, 4, i, vocalizeBeat, [1.25]);
}
// vocals
var vocalArray = ["CIARA_MELANIN_VOX_CIARA_1", "CIARA_MELANIN_VOX_CIARA_2"];
for (var s = 0, m = 13; s < 4; s++, m += 4) {
  fitMedia(vocalArray[s % 2], 4, m, m + 4);
}
// horns
var hornSound = "Y26_ALERT_1";
var hornBeat = "0+++0+++0+++0+++";
makeBeat(hornSound, 5, 28, hornBeat);
setEffect(5, VOLUME, GAIN, 12.0, 28, 12.0, 29);
// bassdrop
fitMedia(RD_TRAP_BASSDROPS_1, 6, 28.5, 29);
setEffect(6, REVERB, REVERB_TIME, 400.0);
setEffect(6, VOLUME, GAIN, 9.0);
// post bass drop
var fullMeasure = "0+++++++++++++++";
makeBeatSlice(YG_EDM_FX_11, 1, 32, fullMeasure, [1.5]);
// instrumental
var sound = RD_EDM_ANALOGPLUCK_2;
var beat = "0+--0+------0+++";
for (var i = 29; i < 33; i++) {
  makeBeat(sound, 4, i, beat);
  makeBeat(sound, 5, i, beat);
}
setEffect(4, VOLUME, GAIN, 12.0, 29, 12.0, 33);
// outro
fitMedia(RD_EDM_CHORDPART_8, 1, 33, 41);
fitMedia(CIARA_MELANIN_VOX_HOOK_1, 4, 33, 37);
fitMedia(CIARA_MELANIN_VOX_HOOK_2, 4, 37, 41);
fitMedia(CIARA_MELANIN_VOX_HOOK_1, 4, 41, 44.9);
setEffect(1, VOLUME, GAIN, 5.5, 33, 5.5, 45);
setEffect(4, VOLUME, GAIN, -0.25, 33, -0.25, 41);

finish();
