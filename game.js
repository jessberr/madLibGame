function madLibs() {
    //Get variables assigned
    var storyDiv = document.getElementById("story");
    var firstNoun = document.getElementById("firstNoun").value;
    var firstAdjective = document.getElementById("firstAdjective").value;
    var secondAdjective = document.getElementById("secondAdjective").value;
    var firstVerb = document.getElementById("firstVerb").value;
    var pastVerb = document.getElementById("pastVerb").value;
    var firstAdverb = document.getElementById("firstAdverb").value;
    var firstEmotion = document.getElementById("firstEmotion").value;
    var hide = document.getElementById("words");
    this.words.style.display = "none";
    // Putting the story together
    storyDiv.innerHTML =
      "<p>One day I was <span class=missing-word> " +
      firstVerb +
      "</span> when I saw a <span class=missing-word>" +
      firstAdjective +
      "</span><span class=missing-word> " +
      firstNoun +
      "</span>. At first I was <span class=missing-word>" +
      firstEmotion +
      "</span>, but then I<span class=missing-word> " +
      pastVerb +
      " </span><span class=missing-word>" +
      firstAdverb +
      "</span> towards it and gave it a <span class=missing-word>" +
      secondAdjective +
      "</span> hug.</p><button onClick=startOver()>Start Over</button>";
  }
  
  function startOver() {
    location.reload();
  }
  