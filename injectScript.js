if (/(.+)?youtube\.(.+)?/gm.test(window.location.host)) {
    var newbtn = document.createElement("button")
    newbtn.classList.add("ytp-button")
    newbtn.classList.add("ytp-button-UNDO")
    // Google fonts undo logo
    newbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>'
    newbtn.addEventListener("click", function(e) {
        if (lastTime.skipBack) {
            document.getElementsByTagName('video')[0].currentTime = lastTime.skipBack
        }
    })
    //document.querySelector(".ytp-right-controls").prepend(newbtn)

    
    var lastTime = {
        time: 0,
        skipBack: null
    }
    setInterval(() => {
        if (document.querySelector(".ytp-right-controls") && !document.querySelector(".ytp-button-UNDO")) {
            document.querySelector(".ytp-right-controls").prepend(newbtn)
        }
        if (document.getElementsByTagName('video')[0]) {
            nowTime = document.getElementsByTagName('video')[0].currentTime
            if (nowTime > lastTime.time+10 || nowTime < lastTime.time-10) {
                lastTime.skipBack = lastTime.time
            }
            lastTime.time = nowTime
        }
    }, 1000)
}
