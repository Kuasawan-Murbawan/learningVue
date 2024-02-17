const app = Vue.createApp({
  // 'app' is a Vue instance
  // functions and data to react to any event (clicks, scroll, etc)

  data() {
    // data is a function that returns an object

    return {
      showBooks: true,
      title: "The final empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
        },
      ],
      url: "https://www.google.com",
    };
  },

  methods: {
    changeAuthor1() {
      this.author = "Micheal Jackson";
    },

    changeAuthor(author) {
      this.author = author;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(event, data) {
      console.log(event, event.type);
      if (data) {
        console.log(data);
      }
    },

    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY; // get the current position of cursor
    },
  },
});

app.mount("#header1"); // now this instace can control everything is header1 div
