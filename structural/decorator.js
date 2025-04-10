//STRUCTURAL DESIGN PATTERNS

//Decorator
/**
 * Pola desain dekorator memungkinkan Anda menambahkan metode dan properti baru ke objek setelah pembuatan. 
 * Ini berguna saat kita ingin memperluas kemampuan komponen selama runtime.
 */

//file name: decorator-pattern.js
//Step 1: Create an interface
class MusicArtist {
  constructor({ name, members }) {
    this.name = name;
    this.members = members;
  }
  displayMembers() {
    console.log(
      "Group name",
      this.name,
      " has",
      this.members.length,
      " members:"
    );
    this.members.map((item) => console.log(item));
  }
}
//Step 2: Create another interface that extends the functionality of MusicArtist
class PerformingArtist extends MusicArtist {
  constructor({ name, members, eventName, songName }) {
    super({ name, members });
    this.eventName = eventName;
    this.songName = songName;
  }
  perform() {
    console.log(
      this.name +
        " is now performing at " +
        this.eventName +
        " They will play their hit song " +
        this.songName
    );
  }
}
//create an instance of PerformingArtist and print out its properties:
const akmu = new PerformingArtist({
  name: "Akmu",
  members: ["Suhyun", "Chanhyuk"],
  eventName: "MNET",
  songName: "Hero",
});
akmu.displayMembers();
akmu.perform();