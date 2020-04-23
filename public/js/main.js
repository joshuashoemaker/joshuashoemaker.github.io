$('#meetMeButton').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500)
  return false
})

$('.project').click(function (e) {
  e.preventDefault()
  const id = $(this).attr('id')
  if (id === 'shc') {
    window.open('http://scotthowardconsulting.com', '_blank')
  } else if (id === 'tutor') {
    window.open('https://www.wyzant.com/Tutors/WebDevWithJoshua', '_blank')
  } else if (id === 'blog') {
    window.open('https://medium.com/@JShoemakerDev', '_blank')
  }
})
