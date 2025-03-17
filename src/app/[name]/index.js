/**
 * ESTE JS CONTROLA LA VISTA DEL CLIENTE
 * SE LLAMA DESDE LA VISTA DEL CLIENTE
 */

/**
 * VARIABLE DATA VIENE DE LA VISTA DEL CLIENTE
 */

var language = null;

/**
 * Se espera a que el documento cargue completamente
 */
jQuery(window).on("load", function () {
  var element = null;

  /**
   * Se define el metodo de inyeccion del modal
   */
  var injectFunction = function () {
    // Se asigna el lenguaje del paybox
    language = data.PayboxLanguage;

    console.log("data", data);

    /**
     * Se valida si no existe un boton de pagos inyectado
     * O si existe 1 boton inserta el tipo de paybox es Xchange(En xchange el boton de pagos es diferente al usual)
     */
    if (
      jQuery("#pay").length == 0 ||
      (typeof data.PayboxXchange !== "undefined" && jQuery("#pay").length == 1)
    ) {
      var modal = "";
      // Inserto los recursos necesarios del PayBox
      // Script que se encarga de controlar la foto de perfil del usuario en el paybox
      jQuery("head").append(
        "<link type='text/css' rel='stylesheet' href='https://paybox.quikly.app/cdn/css/imageviewer.css'/>"
      );
      jQuery("head").append(
        "<script src='https://paybox.quikly.app/cdn/js/imageviewer.js'></script>"
      );
      // Script que se encarga de controlar nativamente el contenedor del modal
      jQuery("head").append(
        "<script src='https://paybox.quikly.app/paybox/js/index.js'></script>"
      );
      jQuery("head").append(
        "<link type='text/css' rel='stylesheet' href='https://paybox.quikly.app/paybox/css/Paybox.css'/>"
      );
      jQuery("head").append(
        "<link type='text/css' rel='stylesheet' href='https://paybox.quikly.app/paybox/css/style.css'/>"
      );

      // Si el PayBox no es de Tipo Xchange (false o null), Inserto el boton por defecto de Xchange (Boton Azul con tarjetas)
      if (
        typeof data.PayboxXchange == "undefined" ||
        data.PayboxXchange == null ||
        data.PayboxXchange == false
      ) {
        // Asigno el id del evento que apertura el modal
        element = "div#ButtonPaybox";

        if (
          typeof data.PayboxLanguage != "undefined" &&
          data.PayboxLanguage != null &&
          data.PayboxLanguage != false
        ) {
          if (data.PayboxLanguage == "es") {
            // BOTON ESPAÑOL
            modal +=
              "<button style='margin: 0 auto;' data-modal='#paybox_modal' id='pay' class='btn-api paybox_modal__trigger language_es'></button>";
          } else if (data.PayboxLanguage == "us") {
            // BOTON INGLES
            modal +=
              "<button style='margin: 0 auto;' data-modal='#paybox_modal' id='pay' class='btn-api paybox_modal__trigger language_us'></button>";
          }
        } else {
          // BOTON ESPAÑOL
          modal +=
            "<button style='margin: 0 auto;' data-modal='#paybox_modal' id='pay' class='btn-api paybox_modal__trigger language_es'></button>";
        }
      } else {
        // Asigno el id del evento que apertura el modal
        element = "#modalPaybox";
      }

      // Creo el Contenedor del Modal
      modal +=
        "<div id='paybox_modal' class='paybox_modal paybox_modal__bg' role='dialog' aria-hidden='true' style='display:none; visibility:hidden'>";
      modal += "<div class='paybox_modal__dialog'>";
      modal += "<div id='paybox_modal_content' class='paybox_modal__content'>";
      console.log("data2", data);

      // Asigno la vista del modal en el contenedor
      if (typeof data.PayboxLanguage != "undefined") {
        console.log("data.PayboxLanguage entra 1", data.PayboxLanguage);
        // SE INSERTA LA VISTA(REQUERIDA DEPENDIENDO EL SISTEMA) EN EL IFRAME EN ESPAÑOL
        if (data.PayboxProduction === "false") {
          if (data.PayboxLanguage == "es") {
            modal +=
              "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/square/square.html' frameBorder='0'></iframe>";

            // SE INSERTA LA VISTA(REQUERIDA DEPENDIENDO EL SISTEMA) EN EL IFRAME EN INGLES
          } else if (data.PayboxLanguage == "us") {
            modal +=
              "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/square/square.html' frameBorder='0'></iframe>";

            // SE INSERTA LA VISTA(REQUERIDA DEPENDIENDO EL SISTEMA) EN EL IFRAME EN ESPAÑOL
          } else {
            modal +=
              "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/square/square.html' frameBorder='0'></iframe>";
          }
        } else {
          if (data.PayboxLanguage == "es") {
            modal +=
              "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/paybox.html' frameBorder='0'></iframe>";

            // SE INSERTA LA VISTA(REQUERIDA DEPENDIENDO EL SISTEMA) EN EL IFRAME EN INGLES
          } else if (data.PayboxLanguage == "us") {
            modal +=
              "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/paybox_us.html' frameBorder='0'></iframe>";

            // SE INSERTA LA VISTA(REQUERIDA DEPENDIENDO EL SISTEMA) EN EL IFRAME EN ESPAÑOL
          } else {
            modal +=
              "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/paybox.html' frameBorder='0'></iframe>";
          }
        }
      } else {
        console.log("data.PayboxProduction entra", data.PayboxProduction);
        if (data.PayboxProduction === "false") {
          modal +=
            "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/square/square.html' frameBorder='0'></iframe>";
          localStorage.setItem("data", JSON.stringify(data));
        } else {
          // SE INSERTA LA VISTA(REQUERIDA DEPENDIENDO EL SISTEMA) EN EL IFRAME EN ESPAÑOL
          modal +=
            "<iframe id='iframePaybox' src='https://paybox.quikly.app/paybox/paybox.html' frameBorder='0'></iframe>";
        }
      }

      // LOGICA NATIVA DEL MODAL (SUMINISTRADO POR BYRON)
      modal += "<a href='' class='paybox_modal__close demo-close'>";
      modal += "<svg class='' viewBox='0 0 24 24'>";
      modal +=
        "<path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z'/>";
      modal += "<path d='M0 0h24v24h-24z' fill='none'/>";

      // CIERRES DE ETIQUETAS
      modal += "</svg>";
      modal += "</a>";
      modal += "</div>";
      modal += "</div>";
      modal += "</div>";

      // Inyecto el contenedor con la vista en el DOM ***DEL CLIENTE***
      jQuery(element).append(modal);
    }
  };

  /**
   * Se define el metodo de comunicacion de iframes (Cliente / Paybox)
   */
  var execute = function () {
    var error = false;
    // Se define el receptor del iframe
    var receiver = document.getElementById("iframePaybox").contentWindow;
    var domain = "*";

    // Evita que se ejecute el elemento form
    jQuery("#PayBox").submit(function () {
      return false;
    });

    // Nos suscribimos al evento de click de cerrado del modal
    jQuery(parent.document)
      .find(".paybox_modal__close")
      .on("click", function (event) {
        event.preventDefault();

        // Nos comunicamos con el Paybox para resetear el formulario del Iframe
        receiver.postMessage({ modal: "reset" }, domain);
      });

    /**
     * Extraemos la informacion del Paybox definida por nuestro cliente
     */

    // VALIDAMOS SI LA VARIABLE ESTA DEFINIDA Y TIENE UN VALOR DIFERENTE DE VACIO Y SI TIENE EL IDENTIFICADOR #(id de html) PARA LUEGO OBTENER EL VALOR REFERENCIADO POR EL ID DEL ELEMENTO
    if (
      typeof data.PayboxRemail !== "undefined" &&
      typeof data.PayboxRemail !== "" &&
      data.PayboxRemail.indexOf("#") != -1
    ) {
      data["remail"] = jQuery(parent.document).find(data.PayboxRemail).val();

      // EXTRAEMOS EL VALOR SUMINISTRADO POR NUESTRO CLIENTE, SEA CUAL SEA SU VALOR
    } else {
      data["remail"] = data.PayboxRemail;
    }

    // VALIDAMOS SI LA VARIABLE ESTA DEFINIDA Y TIENE UN VALOR DIFERENTE DE VACIO Y SI TIENE EL IDENTIFICADOR #(id de html) PARA LUEGO OBTENER EL VALOR REFERENCIADO POR EL ID DEL ELEMENTO
    if (
      typeof data.PayboxSendmail !== "undefined" &&
      typeof data.PayboxSendmail !== "" &&
      data.PayboxSendmail.indexOf("#") != -1
    ) {
      data["sendmail"] = jQuery(parent.document)
        .find(data.PayboxSendmail)
        .val();

      // EXTRAEMOS EL VALOR SUMINISTRADO POR NUESTRO CLIENTE, SEA CUAL SEA SU VALOR
    } else {
      data["sendmail"] = data.PayboxSendmail;
    }

    // VALIDAMOS SI LA VARIABLE ESTA DEFINIDA Y TIENE UN VALOR DIFERENTE DE VACIO Y SI TIENE EL IDENTIFICADOR #(id de html) PARA LUEGO OBTENER EL VALOR REFERENCIADO POR EL ID DEL ELEMENTO
    if (
      typeof data.PayboxRename !== "undefined" &&
      typeof data.PayboxRename !== "" &&
      data.PayboxRename.indexOf("#") != -1
    ) {
      data["rename"] = jQuery(parent.document).find(data.PayboxRename).val();
      console.log("data.PayboxRename", data.PayboxRename);

      // EXTRAEMOS EL VALOR SUMINISTRADO POR NUESTRO CLIENTE, SEA CUAL SEA SU VALOR
    } else {
      data["rename"] = data.PayboxRename;
      console.log("data.PayboxRename", data.PayboxRename);
    }

    if (typeof data.PayboxTypeUser !== "undefined" &&
      typeof data.PayboxTypeUser !== "" &&
      data.PayboxTypeUser.indexOf("#") != -1) {

      data["typeUser"] = jQuery(parent.document).find(data.PayboxTypeUser).val();
      //console.log("data.typeUser", data.PayboxTypeUser.val());

    } else {
      data["typeUser"] = data.PayboxTypeUser;
      //console.log("data.typeUser", data.PayboxTypeUser);

    }

    // VALIDAMOS SI LA VARIABLE ESTA DEFINIDA Y TIENE UN VALOR DIFERENTE DE VACIO Y SI TIENE EL IDENTIFICADOR #(id de html) PARA LUEGO OBTENER EL VALOR REFERENCIADO POR EL ID DEL ELEMENTO
    if (
      typeof data.PayboxSendname !== "undefined" &&
      typeof data.PayboxSendname !== "" &&
      data.PayboxSendname.indexOf("#") != -1
    ) {
      data["sendname"] = jQuery(parent.document)
        .find(data.PayboxSendname)
        .val();

      // EXTRAEMOS EL VALOR SUMINISTRADO POR NUESTRO CLIENTE, SEA CUAL SEA SU VALOR
    } else {
      data["sendname"] = data.PayboxSendname;
    }

    // VALIDAMOS SI LA VARIABLE ESTA DEFINIDA Y TIENE UN VALOR DIFERENTE DE VACIO Y SI TIENE EL IDENTIFICADOR #(id de html) PARA LUEGO OBTENER EL VALOR REFERENCIADO POR EL ID DEL ELEMENTO
    if (
      typeof data.PayboxAmount !== "undefined" &&
      typeof data.PayboxAmount !== "" &&
      data.PayboxAmount.indexOf("#") != -1
    ) {
      data["amount"] = jQuery(parent.document).find(data.PayboxAmount).val();

      // EXTRAEMOS EL VALOR SUMINISTRADO POR NUESTRO CLIENTE, SEA CUAL SEA SU VALOR
    } else {
      data["amount"] = data.PayboxAmount;
    }

    // VALIDAMOS SI LA VARIABLE ESTA DEFINIDA Y TIENE UN VALOR DIFERENTE DE VACIO Y SI TIENE EL IDENTIFICADOR #(id de html) PARA LUEGO OBTENER EL VALOR REFERENCIADO POR EL ID DEL ELEMENTO
    if (
      typeof data.PayboxDescription !== "undefined" &&
      typeof data.PayboxDescription !== "" &&
      data.PayboxDescription.indexOf("#") != -1
    ) {
      data["description"] = jQuery(parent.document)
        .find(data.PayboxDescription)
        .val();

      // EXTRAEMOS EL VALOR SUMINISTRADO POR NUESTRO CLIENTE, SEA CUAL SEA SU VALOR
    } else {
      data["description"] = data.PayboxDescription;
    }

    // VALIDAMOS SI LA VARIABLE ESTA DEFINIDA Y TIENE UN VALOR DIFERENTE DE VACIO Y SI TIENE EL IDENTIFICADOR #(id de html) PARA LUEGO OBTENER EL VALOR REFERENCIADO POR EL ID DEL ELEMENTO
    if (
      typeof data.PayboxProduction !== "undefined" &&
      typeof data.PayboxProduction !== "" &&
      typeof data.PayboxProduction !== false
    ) {
      if (String(data.PayboxProduction).indexOf("#") != -1) {
        data["production"] = jQuery(parent.document)
          .find(data.PayboxProduction)
          .val();
      }

      // EXTRAEMOS EL VALOR SUMINISTRADO POR NUESTRO CLIENTE, SEA CUAL SEA SU VALOR
    } else {
      data["production"] = data.PayboxProduction;
    }

    // INDICAMOS QUE NO ES UN PAYBOX DE XCHANGE (DASHBOARD XCHANGE)
    data["PayboxXchange"] = false;

    /**
     * Creamos el Objeto que enviaremos al Paybox
     */
    var object = {
      response: data,
      authorize: String("$authorize = " + onAuthorize + ""),
      paybox: true,
    };

    // Validamos si existe variable requeridas
    var payboxRequired =
      typeof data.PayboxRequired !== "undefined" &&
        typeof data.PayboxRequired !== null &&
        typeof data.PayboxRequired !== ""
        ? data.PayboxRequired
        : false;
    // Declaracion de variables
    var var_verify = null;
    var var_error = false;

    /**
     * Validamos los campos requeridos
     */
    if (typeof payboxRequired == "object") {
      // Validamos si existe algun campo requerido vacio
      payboxRequired.forEach(function (value, index) {
        var_verify = jQuery(document)
          .find("" + value + "")
          .val();
        if (
          typeof var_verify == "undefined" ||
          var_verify == null ||
          var_verify == ""
        ) {
          console.log(
            "El nombre de la variable " + value + " está vacía o nula."
          );
          var_error = true;
        }
      });

      // Si encontramos algun campo vacio mandamos a cerrar el modal
      if (var_error) {
        // Nos comunicamos con el Paybox para que cierre el modal
        receiver.postMessage({ modal: "modalclose" }, domain);
      } else {
        // Enviamos el objeto de datos al Paybox
        receiver.postMessage(object, domain);
      }
    } else {
      // Enviamos el objeto de datos al Paybox
      receiver.postMessage(object, domain);
    }
  };

  // Ejecutamos la inyeccion del modal
  injectFunction();

  // Validamos si el Paybox es de tipo correo
  if (data.PayboxCorreo == true) {
    // Esperamos un tiempo prudente antes de aperturar el modal automaticamente
    setTimeout(execute, 1000);
  } else {
    // Nos suscribimos al evento del click del boton del Paybox
    jQuery(parent.document)
      .find("#pay")
      .on("click", function (event) {
        event.preventDefault();

        // Ejecutamos la comunicacion con el Paybox
        execute();
      });
  }
});

jQuery(document).on("ready", function () {
  // Declaracion de variables
  var $button_close;

  // Generamos el metodo de recepcion de mensajes del Paybox al cliente
  function receiveMessage(e) {
    // Metodo para aperturar el modal
    var openModal = function () {
      jQuery(parent.document).find("#paybox_modal").css("display", "");
      jQuery(parent.document).find("#paybox_modal").css("visibility", "");
      jQuery(parent.document)
        .find("#paybox_modal")
        .addClass("paybox_modal--active");
      jQuery(parent.document)
        .find("#paybox_modal_content")
        .addClass("paybox_modal__content--active");
    };

    // Metodo para cerrar el modal
    var closeModal = function () {
      var trigger = jQuery(parent.document).find(".paybox_modal__trigger");
      var paybox_modals = jQuery(parent.document).find(".paybox_modal");
      var paybox_modalsbg = jQuery(parent.document).find(".paybox_modal__bg");
      var content = jQuery(parent.document).find(".paybox_modal__content");
      var closers = jQuery(parent.document).find(".paybox_modal__close");
      var target = jQuery(parent.document).find(".paybox_modal__close");
      var div = jQuery(parent.document).find("#paybox_modal__temp");
      var contentDelay = 400;
      var len = 1;

      if (div.length > 0) {
        div.remove();
      }

      if (paybox_modals[0])
        paybox_modals[0].classList.remove("paybox_modal--active");
      if (content[0])
        content[0].classList.remove("paybox_modal__content--active");
      if (trigger[0]) trigger[0].style.transform = "none";
      if (trigger[0]) trigger[0].style.webkitTransform = "none";
      if (trigger[0])
        trigger[0].classList.remove("paybox_modal__trigger--active");
    };

    // Metodo generador de notificaciones
    var notify = function (response) {
      if (typeof jQuery.notify !== "undefined") {
        jQuery.notify(
          {
            icon: "https://paybox.quikly.app/img/logo-icon.png",
            title: "<strong>Notificación: </strong>",
            message: response.message,
          },
          {
            icon_type: "image",
            type: "warning",
            allow_dismiss: true,
            mouse_over: null,
            timer: 2000,
            offset: {
              x: 10,
              y: 85,
            },
            animate: {
              enter: "animated bounceIn",
              exit: "animated bounceOut",
            },
          }
        );
      }
    };

    console.log("data", e.data);

    // Controlamos las excepciones
    try {
      // Validamos si existe un error en el modal
      if (e.data.error) {
        // Si el modal es tipo Xchange, mostramos el error tipo Emergente en la pagina huesped(app.quikly.app)
        if (data.PayboxXchange) {
          // Mostramos el error
          notify(e.data.error);

          // Caso contrario mostramos el error en consola
        } else {
          console.log(e.data.error);
        }

        // Validamos si la transaccion es exitosa
      } else if (
        e &&
        e.data &&
        e.data.paymentIntent &&
        e.data.status == "succeeded"
      ) {
        // Eliminamos el valor sobrante modal del objeto
        delete e.data.modal;
        // Ejecutamos el metodo suministrado por el cliente entregandole la informacion obtenida de la transaccion
        onAuthorize(e.data);

        // Validamos si la transaccion tuvo algun problema
      } else if (e.data.status == "Failed") {
        onAuthorize(e.data);
        /*console.log(e.data)*/
        // Validamos si el usuario desea interactuar con la foto de perfil
      } else if (e.data.previewImage) {
        // Nos suscribimos al evento de click de cerrar foto extendida
        jQuery(".iv-close").click(function () {
          jQuery(".paybox_modal").show();
          jQuery(".iv-container").css("z-index", "1");
        });

        // Validamos si el usuario desea previsualizar la foto de perfil
        if (e.data.viewImage) {
          // Validamos si la accion a realizar es de apertura
          if (e.data.action == "open") {
            // Ocultamos temporalmente el modal
            jQuery(".paybox_modal").hide();
            jQuery(".iv-container").css("z-index", "999999");

            // Obtenemos la url de la imagen de perfil
            var src = e.data.imageUrl;
            var viewer = ImageViewer();
            // Mostramos la imagen expandida
            viewer.show(src, src);
          }
        }
      }

      // Validamos si el usuario desea cerrar el modal
      if (e.data.modal == "modalclose") {
        closeModal();
      }

      // Validamos si el usuario desea aperturar el modal
      if (e.data.modal == "modalOpen") {
        openModal();
      }

      // Validamos si el boton de cerrar modal debe estar oculto
      if (e.data.button_close) {
        // Guardamos el boton en una variable
        $button_close = jQuery(parent.document).find(
          "#paybox_modal_content .paybox_modal__close"
        )[0].outerHTML;

        // Eliminamos el boton de cerrar modal
        jQuery(parent.document).find(".paybox_modal__close").remove();
      }

      // Validamos si el boton de cerrar modal debe estar visible
      if (e.data.button_open) {
        jQuery(parent.document)
          .find("#paybox_modal_content")
          .append($button_close);
      }
    } catch (ex) {
      // Devolvemos la excepcion por consola
      console.log(ex);
    }
  }

  // Nos suscribimos al evento de message de Iframe
  window.addEventListener("message", receiveMessage);
});
