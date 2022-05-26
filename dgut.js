(function() {
    'use strict';
    var timeId = setInterval(()=>{
        var audio = document.querySelector('.pv-video')
        if (audio !== null) {
            audio.addEventListener('ended',function() {
                // alert('over')
                queryAndClick()
            })
            audio.muted = 'muted'
            console.log('视频控件挂载成功');
            clearInterval(timeId)
        }
    })
    // 查找并点击下一个视频
    function queryAndClick() {
        // var list = document.querySelector('.chapter_list')
        // console.dir(list);
        console.log('正在查找下一个视频');
        var activeLi = document.querySelectorAll('.active')[1]
        console.log(activeLi);
        console.dir(activeLi)
        var next = activeLi.nextElementSibling
        if (next === null) {return}
        console.log('准备进入下一个视频');
        next.children[0].click()
        // document.querySelectorAll('.active')[1].nextElementSibling.children[0].click()
        setTimeout(()=>{
            location.reload();
        },2000)
    }
    // Your code here...
})();