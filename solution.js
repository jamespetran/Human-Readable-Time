function humanReadable (seconds) {
  // there are 3600 seconds in an hour
  const hSec = 3600;
  // there are 60 seconds in a minute
  const mSec = 60;
  // loop counter
  let loop = 1;
  let h = 0;
  let m = 0;
  let s = 0;
  while (seconds >= hSec * loop) {
    h = loop;
    loop++;
  }
  seconds -= hSec * (loop - 1);
  loop = 1;
  while (seconds >= mSec * loop) {
    m = loop;
    loop++;
  }
  seconds -= mSec * (loop - 1);
  s = seconds;
  
  h = ("00" + h).slice(-2);
  m = ("00" + m).slice(-2);
  s = ("00" + s).slice(-2);
  
  return (h + ":" + m + ":" + s)
}
