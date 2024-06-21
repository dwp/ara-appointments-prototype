const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line

// Change the appointment owner - manual allocation
router.post('/change-owner', function(request, response) {

  var apptowner = request.session.data['apptowner']
  if (apptowner == "Amy Gill"){
      response.redirect("v9/has/book-appt/has-check-answers")
  }
  else if (apptowner == "Danny Travasso"){
    response.redirect("v9/has/book-appt/has-check-answers")
  }
  else if (apptowner == "Julie Smails"){
    response.redirect("v9/has/book-appt/has-cal2")
  }
  else if (apptowner == "Monica Anyanwu"){
    response.redirect("v9/has/book-appt/has-cal2")
  }
  else if (apptowner == "Raka Banerjee"){
    response.redirect("v9/has/book-appt/has-cal2")
  }
  else if (apptowner == "Rianna Johnson"){
    response.redirect("v9/has/book-appt/has-cal2")
  }
  else if (apptowner == "Sarah Thornley"){
    response.redirect("v9/has/book-appt/has-cal2")
  }
  else if (apptowner == "other"){
    response.redirect("v9/has/book-appt/appt-owners-all")
  }
})

module.exports = router