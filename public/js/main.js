$('#meetMeButton').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


$('.project').click(function(){
    let id = $(this).attr('id');
    if(id === "monas-escape"){
        window.open("http://www.github.com/joshuashoemaker/game-off-2016", '_blank');
    }
    else if(id === "brightScreen"){
        window.open("http://www.github.com/joshuashoemaker/brightScreen", '_blank');
    }
    else if(id === "ferryman"){
        window.open("http://www.github.com/joshuashoemaker/theferryman", '_blank');
    }
    else if(id === "blogEngine"){
        window.open("http://www.github.com/joshuashoemaker/python-blog-engine", '_blank');
    }
})
