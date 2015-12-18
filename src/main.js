require(['qix!main'], function (maincomp) {
  var target = document.getElementById('app-container');

  model = Bacon.Model({
    login: {}
  });
  maincomp.spawn(model, target);
  model.lens('login.creds').onValue(function (v) {
    if (!v)
      return;
    if (v.user && v.pwd) {
      model.lens('login').set(false);
      model.lens('app').set(true);
    }
  });
});