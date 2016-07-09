jQuery(function() {
  // proje ba¿vurusu olu¿turma jquery kontrolleri
  $(".webform-client-form-97 input").attr("autocomplete","false");
  $(".webform-client-form-97 input").attr("autocomplete","false");
  $(".page-node-add-proje .node-proje-form input").attr("autocomplete","off");
  $(".page-node-add-proje .node-proje-form input").attr("autocomplete","off");
  $("#page-section-1099").hide();
  $("#page-section-450 #apply").on('click', function() {
    $("#page-section-1099").toggle(); 
  });
  $('.webform-client-form-97 .webform-submit').attr('disabled','disabled');
  $('.webform-client-form-97 .webform-submit').fadeTo( "fast", 0.2 );
  $('.webform-client-form-97 .form-actions').append('<span id="validationError"></span>');
  $('.webform-client-form-97 .webform-component--kullanici-adi').append('<span id="validationErrorName"></span>');
  $('.webform-client-form-97 .webform-component-email').append('<span id="validationErrorMail"></span>');
  $('.page-node-add-proje .node-proje-form .form-submit').attr('disabled','disabled');
  $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 0.2 ); 
  $('.page-node-add-proje .node-proje-form .form-actions').append('<span id="validationError"></span>');
  $('.page-node-add-proje .node-proje-form .field-name-field-kullanici-adi .form-type-textfield').append('<span id="validationErrorName"></span>');
  $('.page-node-add-proje .node-proje-form .field-name-field-e-posta .form-type-textfield').append('<span id="validationErrorMail"></span>');
  if($(".page-node-add-proje .node-proje-form input").val()){
    var vCheckMail = 0;
    var vCheckName = 0;
    var vCheckMailP = 0;
    var vCheckNameP = 0;
    var vCheckAd = 0;
    var vCheckSoyad = 0;
    var vCheckBaslik = 0;
    var vCheckAciklama = 0;
    var vCheckKategori = 0;
    var vCheckEtiketler = 0;
    var vCheckAdres = 0;
    var vCheckIl = 0;
    var vCheckTelefon = 0;
    var vCheckCevap = 0;
    var vCheckTarihDay = 0;
    var vCheckTarihYear = 0;
    var vCheckTarihMonth = 0;
    var vCheckUcret = 0; 
    var vCheckBaslangic = 0;
    var vCheckBitis = 0;
    var vCheckLokasyon = 0;
    console.log("heps¿f¿r");
    $('.page-node-add-proje .node-proje-form .form-submit').removeAttr('disabled');
    $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 1 );
    $('.page-node-add-proje .node-proje-form #validationError').text('');
    console.log("Username:" + vCheckNameP + " Mail:" + vCheckMailP + " BaslÄ±k:" + vCheckBaslik + " AÃ§Ä±klama:" + vCheckAciklama + " kategori:" + vCheckKategori + " Etiketler:" + vCheckEtiketler + " Baslangic" + vCheckBaslangic  + " Bitis:" + vCheckBitis  + " Lokasyon:" + vCheckLokasyon);
  } else {
    var vCheckMail = 1;
    var vCheckName = 1;
    var vCheckMailP = 1;
    var vCheckNameP = 1;
    var vCheckAd = 1;
    var vCheckSoyad = 1;
    var vCheckBaslik = 1;
    var vCheckAciklama = 1;
    var vCheckKategori = 0;
    var vCheckEtiketler = 0;
    var vCheckAdres = 0;
    var vCheckIl = 1;
    var vCheckTelefon = 1;
    var vCheckCevap = 1;
    var vCheckTarihDay = 1;
    var vCheckTarihYear = 1;
    var vCheckTarihMonth = 1;
    var vCheckUcret = 1;
    var vCheckBaslangic = 0;
    var vCheckBitis = 1;
    var vCheckLokasyon = 0;
    console.log("hepbir");
  }
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname;
  }
  $(".webform-client-form-97 .webform-component-email input[type=email]").bind("blur", function() {
    $(this).addClass("ajax-processed");
    $.ajax({
      url: window.location.origin+'/users.json',
      method: 'POST',
      dataType: 'json',
      success: function (gelen) {
        var found = false;
        $.each(gelen.kullanicilar,function(k,v) {
          if (v.kullanici.eposta == $('.webform-client-form-97 .webform-component-email input[type=email]').val()) {
            found = true;
          }
        });
        var olcu = $('.webform-client-form-97 .webform-component-email input[type=email]').val().length;
        if (found || olcu == 0) {
          $('.webform-client-form-97 .webform-component-email input[type=email]').css({"background":" #fef5f1","color":"#8c2e0b","border":"1px solid "});
          vCheckMail = 1;
          $('.webform-client-form-97 #validationErrorMail').html('E-posta adresi uygun değil. Bu e-posta size ait ise <a href="/user?destination='+window.location.pathname+'">lütfen giriş yapınız.</a>');
        } else {
          $('.webform-client-form-97 .webform-component-email input[type=email]').css({"background":" #f8fff0","color":"#234600","border":"1px solid rgb(129, 181, 59)"});
          $('.webform-client-form-97 #validationErrorMail').html('');
          vCheckMail = 0;
        }
      }
    });
  });
  $(".webform-client-form-97 .webform-component--kullanici-adi input[type=text]").bind("blur", function() {
    $(this).addClass("ajax-processed");
    $.ajax({
      url: window.location.origin+'/users.json',
      method: 'POST',
      dataType: 'json',
      success: function (gelen) {
        var found = false;
        $.each(gelen.kullanicilar,function(k,v) {
          if (v.kullanici.isim == $('.webform-client-form-97 .webform-component--kullanici-adi input').val()) {
            found = true;
          }
        });
        var olcu = $('.webform-client-form-97 .webform-component--kullanici-adi input[type=text]').val().length;
        if (found || olcu == 0) {
          $('.webform-client-form-97 .webform-component--kullanici-adi input[type=text]').css({"background":" #fef5f1","color":"#8c2e0b","border":"1px solid "});
          vCheckName = 1;
          $('.webform-client-form-97 #validationErrorName').html('Kullanıcı adı uygun değil. Bu kullanıcı adı size ait ise <a href="/user?destination='+window.location.pathname+'">lütfen giriş yapınız.</a>');
        } else {
          $('.webform-client-form-97 .webform-component--kullanici-adi input[type=text]').css({"background":" #f8fff0","color":"#234600","border":"1px solid rgb(129, 181, 59)"});
          vCheckName = 0;
          $('.webform-client-form-97 #validationErrorName').html('');
        }
      }
    });
  });
  $(".webform-client-form-97 .webform-component--name input[type=text]").bind("blur", function() {
    var olcu = $('.webform-client-form-97 .webform-component--name input[type=text]').val().length;
    if(olcu == 0){
      vCheckAd = 1;
    }else{
      vCheckAd = 0;
    }
  });
  $(".webform-client-form-97 .webform-component--last-name input[type=text]").bind("blur", function() {
    var olcu = $('.webform-client-form-97 .webform-component--last-name input[type=text]').val().length;
    if(olcu == 0){
      vCheckSoyad = 1;
    }else{
      vCheckSoyad = 0;
    }
  });
  $(".webform-client-form-97 .webform-component--address textarea").bind("blur", function() {
    var olcu = $('.webform-client-form-97 .webform-component--address textarea').val().length;
    if(olcu == 0){
      vCheckAdres = 1;
    }else{
      vCheckAdres = 0;
    }
  });
  $(".webform-client-form-97 .webform-component--city input[type=text]").bind("blur", function() {
    var olcu = $('.webform-client-form-97 .webform-component--city input[type=text]').val().length;
    if(olcu == 0){
      vCheckIl = 1;
    }else{
      vCheckIl = 0;
    }
  });
  $(".webform-client-form-97 .webform-component--phone input[type=text]").bind("blur", function() {
    var olcu = $('.webform-client-form-97 .webform-component--phone input[type=text]').val().length;
    if(olcu == 0){
      vCheckTelefon = 1;
    }else{
      vCheckTelefon = 0;
    }
  });
  $(".webform-client-form-97 .webform-component--answer-to-the-project-application-text- textarea").bind("blur", function() {
    var olcu = $('.webform-client-form-97 .webform-component--answer-to-the-project-application-text- textarea').val().length;
    if(olcu == 0){
      vCheckCevap = 1;
    }else{
      vCheckCevap = 0;
    }
  });
  $(".webform-client-form-97 .form-item-submitted-earliest-possible-start-day select").change( function() {
    var olcu = $('.webform-client-form-97 .form-item-submitted-earliest-possible-start-day select').val();
    if(olcu == 0){
      vCheckTarihDay = 1;
    }else{
      vCheckTarihDay = 0;
    }
  });
  $(".webform-client-form-97 .form-item-submitted-earliest-possible-start-month select").change( function() {
    var olcu = $('.webform-client-form-97 .form-item-submitted-earliest-possible-start-month select').val();
    if(olcu == 0){
      vCheckTarihMonth = 1;
    }else{
      vCheckTarihMonth = 0;
    }
  });
  $(".webform-client-form-97 .form-item-submitted-earliest-possible-start-year select").change( function() {
    var olcu = $('.webform-client-form-97 .form-item-submitted-earliest-possible-start-year select').val();
    if(olcu == 0){
      vCheckTarihYear = 1;
    }else{
      vCheckTarihYear = 0;
    }
  });
  $(".webform-client-form-97 .webform-component--rate-amount input[type=text]").bind("blur", function() {
    var olcu = $('.webform-client-form-97 .webform-component--rate-amount input[type=text]').val().length;
    if(olcu == 0){
      vCheckUcret = 1;
    }else{
      vCheckUcret = 0;
    }
  });
  $(".webform-client-form-97 input[type=text]").bind("blur", function() {
    if(vCheckName + vCheckMail + vCheckAd + vCheckSoyad + vCheckAdres + vCheckIl + vCheckTelefon  + vCheckCevap  + vCheckTarihDay + vCheckTarihMonth + vCheckTarihYear + vCheckUcret >= 1){
      $('.webform-client-form-97 .webform-submit').attr('disabled','disabled');
      $('.webform-client-form-97 .webform-submit').fadeTo( "fast", 0.2 );
      $('.webform-client-form-97 #validationError').text('Form bilgilerinde eksik veya hatalar bulunuyor.');
      console.log("Username:" + vCheckName + " Mail:" + vCheckMail + " Ad:" + vCheckAd + " Soyad:" + vCheckSoyad + " Adres:" + vCheckAdres + " Il:" + vCheckIl + " Telefon" + vCheckTelefon  + " Cevap:" + vCheckCevap  + " GÃ¼n:" + vCheckTarihDay +" Ay:" + vCheckTarihMonth +" YÄ±l:" + vCheckTarihYear + " Ucret:" + vCheckUcret);
    } else {
      $('.webform-client-form-97 .webform-submit').removeAttr('disabled');
      $('.webform-client-form-97 .webform-submit').fadeTo( "fast", 1 );
      $('.webform-client-form-97 #validationError').text('');
      console.log("Username:" + vCheckName + " Mail:" + vCheckMail + " Ad:" + vCheckAd + " Soyad:" + vCheckSoyad + " Adres:" + vCheckAdres + " Il:" + vCheckIl + " Telefon" + vCheckTelefon  + " Cevap:" + vCheckCevap  + " GÃ¼n:" + vCheckTarihDay +" Ay:" + vCheckTarihMonth +" YÄ±l:" + vCheckTarihYear + " Ucret:" + vCheckUcret);
    }
  });
  $(".webform-client-form-97 select").bind("blur", function() {
    if(vCheckName + vCheckMail + vCheckAd + vCheckSoyad + vCheckAdres + vCheckIl + vCheckTelefon  + vCheckCevap  + vCheckTarihDay + vCheckTarihMonth + vCheckTarihYear + vCheckUcret >= 1){
      $('.webform-client-form-97 .webform-submit').attr('disabled','disabled');
      $('.webform-client-form-97 .webform-submit').fadeTo( "fast", 0.2 );
      $('.webform-client-form-97 #validationError').text('Form bilgilerinde eksik veya hatalar bulunuyor.');
      console.log("Username:" + vCheckName + " Mail:" + vCheckMail + " Ad:" + vCheckAd + " Soyad:" + vCheckSoyad + " Adres:" + vCheckAdres + " Il:" + vCheckIl + " Telefon" + vCheckTelefon  + " Cevap:" + vCheckCevap  + " GÃ¼n:" + vCheckTarihDay +" Ay:" + vCheckTarihMonth +" YÄ±l:" + vCheckTarihYear + " Ucret:" + vCheckUcret);
    } else {
      $('.webform-client-form-97 .webform-submit').removeAttr('disabled');
      $('.webform-client-form-97 .webform-submit').fadeTo( "fast", 1 );
      $('.webform-client-form-97 #validationError').text('');
      console.log("Username:" + vCheckName + " Mail:" + vCheckMail + " Ad:" + vCheckAd + " Soyad:" + vCheckSoyad + " Adres:" + vCheckAdres + " Il:" + vCheckIl + " Telefon" + vCheckTelefon  + " Cevap:" + vCheckCevap  + " GÃ¼n:" + vCheckTarihDay +" Ay:" + vCheckTarihMonth +" YÄ±l:" + vCheckTarihYear + " Ucret:" + vCheckUcret);
    }
  });
  $(".webform-client-form-97 textarea").bind("blur", function() {
    if(vCheckName + vCheckMail + vCheckAd + vCheckSoyad + vCheckAdres + vCheckIl + vCheckTelefon  + vCheckCevap  + vCheckTarihDay + vCheckTarihMonth + vCheckTarihYear + vCheckUcret >= 1){
      $('.webform-client-form-97 .webform-submit').attr('disabled','disabled');
      $('.webform-client-form-97 .webform-submit').fadeTo( "fast", 0.2 );
      $('.webform-client-form-97 #validationError').text('Form bilgilerinde eksik veya hatalar bulunuyor.');
      console.log("Username:" + vCheckName + " Mail:" + vCheckMail + " Ad:" + vCheckAd + " Soyad:" + vCheckSoyad + " Adres:" + vCheckAdres + " Il:" + vCheckIl + " Telefon" + vCheckTelefon  + " Cevap:" + vCheckCevap  + " GÃ¼n:" + vCheckTarihDay +" Ay:" + vCheckTarihMonth +" YÄ±l:" + vCheckTarihYear + " Ucret:" + vCheckUcret);
    } else {
      $('.webform-client-form-97 .webform-submit').removeAttr('disabled');
      $('.webform-client-form-97 .webform-submit').fadeTo( "fast", 1 );
      $('.webform-client-form-97 #validationError').text('');
      console.log("Username:" + vCheckName + " Mail:" + vCheckMail + " Ad:" + vCheckAd + " Soyad:" + vCheckSoyad + " Adres:" + vCheckAdres + " Il:" + vCheckIl + " Telefon" + vCheckTelefon  + " Cevap:" + vCheckCevap  + " GÃ¼n:" + vCheckTarihDay +" Ay:" + vCheckTarihMonth +" YÄ±l:" + vCheckTarihYear + " Ucret:" + vCheckUcret);
    }
  });
  // proje ekleme jQuery kontrolleri 
  $(".page-node-add-proje .field-name-field-kullanici-adi input[type=text]").bind("blur", function() {
    $(this).addClass("ajax-processed");
    $.ajax({
      url: window.location.origin+'/users.json',
      method: 'POST',
      dataType: 'json',
      success: function (gelen) {
        var found = false;
        $.each(gelen.kullanicilar,function(k,v) {
          if (v.kullanici.isim == $('.page-node-add-proje .field-name-field-kullanici-adi input[type=text]').val()) {
            found = true;
          }
        });
        var olcu = $('.page-node-add-proje .field-name-field-kullanici-adi input').val().length;
        if (found || olcu == 0) {
          $('.page-node-add-proje .field-name-field-kullanici-adi input[type=text]').css({"background":" #fef5f1","color":"#8c2e0b","border":"1px solid "});
          vCheckNameP = 1;
          $('.page-node-add-proje .field-name-field-kullanici-adi #validationErrorName').html('Kullanıcı adı uygun değil. Bu kullanıcı adı size ait ise <a href="/user?destination='+window.location.pathname+'">lütfen giriş yapınız.</a>');
        } else {
          $('.page-node-add-proje .field-name-field-kullanici-adi input[type=text]').css({"background":" #f8fff0","color":"#234600","border":"1px solid rgb(129, 181, 59)"});
          vCheckNameP = 0;
          $('.page-node-add-proje .field-name-field-kullanici-adi #validationErrorName').html('');
        }
      }
    });
  });
  $(".page-node-add-proje .field-name-field-e-posta input").bind("blur", function() {
    $(this).addClass("ajax-processed");
    $.ajax({
      url: window.location.origin+'/users.json',
      method: 'POST',
      dataType: 'json',
      success: function (gelen) {
        var found = false;
        $.each(gelen.kullanicilar,function(k,v) {
          if (v.kullanici.eposta == $('.page-node-add-proje .field-name-field-e-posta input').val()) {
            found = true;
          }
        });
        var olcu = $('.page-node-add-proje .field-name-field-e-posta input').val().length;
        if (found || olcu == 0) {
          $('.page-node-add-proje .field-name-field-e-posta input').css({"background":" #fef5f1","color":"#8c2e0b","border":"1px solid "});
          vCheckMailP = 1;
          $('.page-node-add-proje .field-name-field-e-posta #validationErrorMail').html('E-posta adresi uygun değil. Bu e-posta size ait ise <a href="/user?destination='+window.location.pathname+'">lütfen giriş yapınız.</a>');
          console.log(vCheckMailP);
        } else {
          $('.page-node-add-proje .field-name-field-e-posta input').css({"background":" #f8fff0","color":"#234600","border":"1px solid rgb(129, 181, 59)"});
          vCheckMailP = 0;
          $('.page-node-add-proje .field-name-field-e-posta #validationErrorMail').html('');
          console.log(vCheckMailP);
        }
      }
    });
  });
  $(".page-node-add-proje .form-item-title input[type=text]").bind("blur", function() {
    var olcu = $('.page-node-add-proje .form-item-title input[type=text]').val().length;
    if(olcu == 0){
      vCheckBaslik = 1;
    }else{
      vCheckBaslik = 0;
    }
  });
  $(".page-node-add-proje .field-name-body textarea").bind("blur", function() {
    var olcu = $('.page-node-add-proje .field-name-body textarea').val().length;
    if(olcu == 0){
      vCheckAciklama = 1;
    }else{
      vCheckAciklama = 0;
    }
  });
  $(".page-node-add-proje .field-name-field-faaliyet-g-sterdi-iniz-kat select").bind("blur", function() {
    var olcu = $('.page-node-add-proje .field-name-field-faaliyet-g-sterdi-iniz-kat select').val().length;
    if(olcu == 0){
      vCheckKategori = 1;
    }else{
      vCheckKategori = 0;
    }
  });
  $(".page-node-add-proje .field-name-field-etiketler select").bind("blur", function() {
    var olcu = $('.page-node-add-proje .field-name-field-etiketler select').val().length;
    if(olcu == 0){
      vCheckEtiketler = 1;
    }else{
      vCheckEtiketler = 0;
    }
  });
  $(".page-node-add-proje .start-date-wrapper input[type=text]").bind("blur", function() {
    var olcu = $('.page-node-add-proje .start-date-wrapper input[type=text]').val().length;
    if(olcu == 0){
      vCheckBaslangic = 1;
    }else{
      vCheckBaslangic = 0;
    }
  });
  $(".page-node-add-proje .end-date-wrapper input[type=text]").bind("blur", function() {
    var olcu = $('.page-node-add-proje .end-date-wrapper input[type=text]').val().length;
    if(olcu == 0){
      vCheckBitis = 1;
    }else{
      vCheckBitis = 0;
    }
  });
  $(".page-node-add-proje .field-name-field-lokasyon select").change( function() {
    var olcu = $('.page-node-add-proje .field-name-field-lokasyon select').val();
    if(olcu == 0){
      vCheckLokasyon = 1;
    }else{
      vCheckLokasyon = 0;
    }
  });
  $(".page-node-add-proje .node-proje-form input[type=text]").bind("blur", function() {
    if(vCheckNameP + vCheckMailP + vCheckBaslik + vCheckAciklama + vCheckKategori + vCheckEtiketler + vCheckBaslangic  + vCheckBitis  + vCheckLokasyon >= 1){
      $('.page-node-add-proje .node-proje-form .form-submit').attr('disabled','disabled');
      $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 0.2 );
      $('.page-node-add-proje .node-proje-form #validationError').text('Form bilgilerinde eksik veya hatalar bulunuyor.');
      console.log("Username:" + vCheckNameP + " Mail:" + vCheckMailP + " BaslÄ±k:" + vCheckBaslik + " AÃ§Ä±klama:" + vCheckAciklama + " kategori:" + vCheckKategori + " Etiketler:" + vCheckEtiketler + " Baslangic" + vCheckBaslangic  + " Bitis:" + vCheckBitis  + " Lokasyon:" + vCheckLokasyon);
    } else {
      $('.page-node-add-proje .node-proje-form .form-submit').removeAttr('disabled');
      $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 1 );
      $('.page-node-add-proje .node-proje-form #validationError').text('');
      console.log("Username:" + vCheckNameP + " Mail:" + vCheckMailP + " BaslÄ±k:" + vCheckBaslik + " AÃ§Ä±klama:" + vCheckAciklama + " kategori:" + vCheckKategori + " Etiketler:" + vCheckEtiketler + " Baslangic" + vCheckBaslangic  + " Bitis:" + vCheckBitis  + " Lokasyon:" + vCheckLokasyon);
    }
  });
  $(".page-node-add-proje .node-proje-form select").bind("blur", function() {
    if(vCheckNameP + vCheckMailP + vCheckBaslik + vCheckAciklama + vCheckKategori + vCheckEtiketler + vCheckBaslangic  + vCheckBitis  + vCheckLokasyon >= 1){
      $('.page-node-add-proje .node-proje-form .form-submit').attr('disabled','disabled');
      $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 0.2 );
      $('.page-node-add-proje .node-proje-form #validationError').text('Form bilgilerinde eksik veya hatalar bulunuyor.');
      console.log("Username:" + vCheckNameP + " Mail:" + vCheckMailP + " BaslÄ±k:" + vCheckBaslik + " AÃ§Ä±klama:" + vCheckAciklama + " kategori:" + vCheckKategori + " Etiketler:" + vCheckEtiketler + " Baslangic" + vCheckBaslangic  + " Bitis:" + vCheckBitis  + " Lokasyon:" + vCheckLokasyon);
    } else {
      $('.page-node-add-proje .node-proje-form .form-submit').removeAttr('disabled');
      $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 1 );
      $('.page-node-add-proje .node-proje-form #validationError').text('');
      console.log("Username:" + vCheckNameP + " Mail:" + vCheckMailP + " BaslÄ±k:" + vCheckBaslik + " AÃ§Ä±klama:" + vCheckAciklama + " kategori:" + vCheckKategori + " Etiketler:" + vCheckEtiketler + " Baslangic" + vCheckBaslangic  + " Bitis:" + vCheckBitis  + " Lokasyon:" + vCheckLokasyon);
    }
  });
  $(".page-node-add-proje .node-proje-form textarea").bind("blur", function() {
    if(vCheckNameP + vCheckMailP + vCheckBaslik + vCheckAciklama + vCheckKategori + vCheckEtiketler + vCheckBaslangic  + vCheckBitis  + vCheckLokasyon >= 1){
      $('.page-node-add-proje .node-proje-form .form-submit').attr('disabled','disabled');
      $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 0.2 );
      $('.page-node-add-proje .node-proje-form #validationError').text('Form bilgilerinde eksik veya hatalar bulunuyor.');
      console.log("Username:" + vCheckNameP + " Mail:" + vCheckMailP + " BaslÄ±k:" + vCheckBaslik + " AÃ§Ä±klama:" + vCheckAciklama + " kategori:" + vCheckKategori + " Etiketler:" + vCheckEtiketler + " Baslangic" + vCheckBaslangic  + " Bitis:" + vCheckBitis  + " Lokasyon:" + vCheckLokasyon);
    } else {
      $('.page-node-add-proje .node-proje-form .form-submit').removeAttr('disabled');
      $('.page-node-add-proje .node-proje-form .form-submit').fadeTo( "fast", 1 );
      $('.page-node-add-proje .node-proje-form #validationError').text('');
      console.log("Username:" + vCheckNameP + " Mail:" + vCheckMailP + " BaslÄ±k:" + vCheckBaslik + " AÃ§Ä±klama:" + vCheckAciklama + " kategori:" + vCheckKategori + " Etiketler:" + vCheckEtiketler + " Baslangic" + vCheckBaslangic  + " Bitis:" + vCheckBitis  + " Lokasyon:" + vCheckLokasyon);
    }
  });
});
