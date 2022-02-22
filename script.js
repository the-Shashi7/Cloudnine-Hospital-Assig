const SlideForEvery2Sec = (n)=>{
    for (let i = 0; i <= n; i++) {
        setTimeout( () =>{
            const images = document.querySelector('.images').src =`img/${i}.jpg`
        }, i * 2000);
    }
}
SlideForEvery2Sec(7);  
setInterval(() => {
    SlideForEvery2Sec(7);  
},16000);
