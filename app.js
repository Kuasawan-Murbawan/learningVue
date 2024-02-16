const app = Vue.createApp({
  // 'app' is a Vue instance
  // functions and data to react to any event (clicks, scroll, etc)

  data() {
    // data is a function that returns an object

    return {
      title: "The final empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
});

app.mount("#header1"); // now this instace can control everything is header1 div
