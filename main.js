console.log(exo18("20;10"));

function exo18(strNotes) {
  const notes = strNotes.split(";");
  let allNotes = 0;
  for (let index = 0; index < notes.length; index++) {
    const note = parseInt(notes[index]);
    allNotes += note;
  }

  return allNotes / notes.length;
}
