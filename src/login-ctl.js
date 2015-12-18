define(function () {
  return function (elem) {
    return function manage_login(login_model) {
      var btn = elem.querySelector('[name=login-btn]');
      btn.addEventListener('click', function () {
        elem.dispatchEvent(new CustomEvent('do-login', {
          bubbles: true
        }));
      });
      login_model.onValue(function (login_data) {
        var can_login = (login_data.pwd && login_data.user);
        if (can_login)
          btn.removeAttribute('disabled');
        else
          btn.setAttribute('disabled', true);
      });
    }
  }
});