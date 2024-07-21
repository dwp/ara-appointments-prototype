const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line


router.post('/has/availability-management/manage-select', function (req, res) {

  var manage = req.session.data['manage']

  if (manage == "agents"){
    res.redirect('agents/agent-profiles')
  } else {
    res.redirect('/v1-rb/has/availability-management/availability/availability-view')
  }

})

router.post('/afn/availability-management/manage-select', function (req, res) {

  var manage = req.session.data['manage']

  if (manage == "agents"){
    res.redirect('agents/agent-profiles')
  } else {
    res.redirect('/v1-rb/afn/availability-management/availability/availability-view')
  }

})

router.post('/vs/availability-management/manage-select', function (req, res) {

  var manage = req.session.data['manage']

  if (manage == "agents"){
    res.redirect('agents/agent-profiles')
  } else {
    res.redirect('/v1-rb/vs/availability-management/availability/availability-view')
  }

})


module.exports = router