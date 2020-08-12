$(function () {
  $(".typed").typed({
    strings: [
      "Software Engineer",
      "Full Stack Dev",
      "Cloud Architect",
      "DevOps Eng",
      "Mobile Dev",
      "Data Scientist",
      "AI and ML enthusiast",
    ],

    stringsElement: null,
    typeSpeed: 50, //30
    startDelay: 1200,
    backSpeed: 30, //20
    backDelay: 2000, //500
    loop: true,
    loopCount: false,  // false = infinite // default 5
    showCursor: false,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function () {},
    preStringTyped: function () {},
    onStringTyped: function () {},
    resetCallback: function () {},
  });
});
