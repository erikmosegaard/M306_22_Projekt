var app = new Vue({
  el: '#app',
  data: {
    noten: [],
    neueNote: 0,
    avg: 0
  },
  methods: {
    addNote: function () {
      this.noten.push(this.neueNote)
      this.neueNote = 0
    },
    calcAvg: function () {
      let sum = 0;
      //iteriere über alle Noten und zähle zusammen
      for (var i = 0; i < this.noten.length; i++) {
        let zahl = parseInt(this.noten[i]);
        sum = sum + zahl;
      }
      //berechne durchschnitt und gebe aus
      console.log(sum)
      console.log(this.noten.length)
      return sum / this.noten.length;
    }
  }
})