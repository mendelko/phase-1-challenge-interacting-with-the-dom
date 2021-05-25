document.addEventListener("DOMContentLoaded", () => {
    let count = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");

    let counter = 0

    // setInterval(function(){
    //     if (true) {
    //         count.innerHTML = counter;
    //         counter += 1;
    //     }
    // }, 1000);
    
    function timer(){
        setInterval(function(){
            if (true) {
                count.innerHTML = counter;
                counter += 1;
            }
        }, 1000);
    }

    timer()

    
    minus.addEventListener("click", (e) => {
        count.innerHTML = counter;
        counter -= 1;
    });
    
    plus.addEventListener("click", (e) => {
        count.innerHTML = counter;
        counter += 1;
    });

    heart.addEventListener("click", (e) => {
        let likes = document.querySelector('.likes');
        let liked = document.createElement('li');

        let likedNum = count.innerHTML;



        liked.innerHTML = `${likedNum} was liked`
        likes.append(liked);
        
    })

    pause.addEventListener("click", (e) => {
        if (pause.innerHTML === "pause"){
            clearInterval(function(){
                if (true){
                    count.innerHTML = counter;
                    counter += 0;
                }
                pause.innerHTML = "resume";
            })
           
        } else {
            timer();
        }
    })
})










