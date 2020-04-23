$('#meetMeButton').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500)
  return false
})

$('.project').click(function () {
  const id = $(this).attr('id')
  if (id === 'shc') {
    window.open('http://scotthowardconsulting.com', '_blank')
  } else if (id === 'tutor') {
    window.open('https://www.wyzant.com/Tutors/WebDevWithJoshua', '_blank')
  } else if (id === 'ferryman') {
    window.open('http://www.github.com/joshuashoemaker/theferryman', '_blank')
  } else if (id === 'blogEngine') {
    window.open('http://www.github.com/joshuashoemaker/python-blog-engine', '_blank')
  }
})
