document.addEventListener("DOMContentLoaded", () => {
  const count = document.getElementById("counter");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const heart = document.getElementById("heart");
  const pause = document.getElementById("pause");
  const commentForm = document.getElementById("comment-form");
  
  
  function plusOne(){
      let counter = parseInt(count.textContent, 10);
      counter += 1;
      count.textContent = counter;
    }
    
    let timer = setInterval(plusOne,1000);
    
    let state = "playing";
    
    minus.addEventListener("click", () => {
      count.innerHTML = i;
      i -= 1;
    });

    plus.addEventListener("click", () => {
      count.innerHTML = i;
      i += 1;
    });

    heart.addEventListener("click", function () {
      j++;
      let li = document.createElement("li");
      let node = document.createTextNode(i + " has been liked " + j + " time(s).");
      let likes = document.querySelector(".likes");
      let lastLike = document.querySelector(".likes").lastChild;
      li.appendChild(node);
      if (j > 1) {
        lastLike.replaceWith(li);
      } else {
        likes.appendChild(li);
      }
    });

    pause.addEventListener("click", function () {
      if (state === "playing") {
        document.querySelector("#plus").disabled = true;
        document.querySelector("#minus").disabled = true;
        document.querySelector("#heart").disabled = true;
        document.querySelector("#submit").disabled = true;
        clearInterval(timer);
        document.querySelector("#pause").textContent = "resume";
        state = "paused";
      } else {
        document.querySelector("#plus").disabled = false;
        document.querySelector("#minus").disabled = false;
        document.querySelector("#heart").disabled = false;
        document.querySelector("#submit").disabled = false;
        timer = setInterval(plusOne, 1000);
        document.querySelector("#pause").textContent = "pause";
        state = "playing";
      }
    });

      commentForm.addEventListener("submit", function (a) {
        a.preventDefault();
        let b = this.children[0],
          c = b.value;
        b.value = "";
        let d = document.querySelector(".comments"),
          e = document.createElement("p");
        (e.innerText = c), d.appendChild(e);
      });
  });
      
        









