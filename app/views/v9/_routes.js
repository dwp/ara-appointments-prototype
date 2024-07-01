const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line

// Change the appointment owner / manual allocation - book an appointment
router.post('/has/book-appt/appt-owners', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Amy Gill"){
      response.redirect("has-check-answers")
  }
  else if (apptowner == "Danny Travasso"){
    response.redirect("has-check-answers")
  }
  else if (apptowner == "other"){
    response.redirect("appt-owners-all")
  }
})

router.post('/has/book-appt/appt-owners-all', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Julie Smails"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Monica Anyanwu"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Raka Banerjee"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Rianna Johnson"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Sarah Thornley"){
    response.redirect("has-cal2")
  }
})

router.post('/has/book-appt/appt-owners-all2', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Julie Smails"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Monica Anyanwu"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Raka Banerjee"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Rianna Johnson"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Sarah Thornley"){
    response.redirect("has-cal2")
  }
})

// Change the appointment owner / manual allocation - amend an appointment from claimant profile
router.post('/has/cancel/appt-owners', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Amy Gill"){
      response.redirect("has-check-answers")
  }
  else if (apptowner == "Danny Travasso"){
    response.redirect("has-check-answers")
  }
  else if (apptowner == "other"){
    response.redirect("appt-owners-all")
  }
})

router.post('/has/cancel/appt-owners-all', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Julie Smails"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Monica Anyanwu"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Raka Banerjee"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Rianna Johnson"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Sarah Thornley"){
    response.redirect("has-cal2")
  }
})


// Change the appointment owner / manual allocation - amend an appointment from booked appointment list

router.post('/has/appt-owners', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Amy Gill"){
      response.redirect("has-check-answers")
  }
  else if (apptowner == "Danny Travasso"){
    response.redirect("has-check-answers")
  }
  else if (apptowner == "other"){
    response.redirect("appt-owners-all")
  }
})

router.post('/has/appt-owners-all', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Julie Smails"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Monica Anyanwu"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Raka Banerjee"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Rianna Johnson"){
    response.redirect("has-cal2")
  }
  else if (apptowner == "Sarah Thornley"){
    response.redirect("has-cal2")
  }
})


module.exports = router