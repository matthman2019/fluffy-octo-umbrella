window.addEventListener('beforeunload', ()=>{
    for (let i=1;i<2;i++) {
        window.open("matthman2019.github.io/fluffy-octo-umbrella", "Ooh ooh ahh ahh", "width=700, height=1000");
        console.log("Monkey time!")
    }
});