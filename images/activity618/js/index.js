
$(function () {
  $("#btn_chou").click(function () {

    $(".mengceng").removeClass("disno");
    $(".tanceng_gift").removeClass("disno");

    $("#open_box").click(function () {

      $(".tanceng_gift").addClass("disno");
      $(".tanceng_iPad").removeClass("disno");

      $("#write_addre").click(function () {

        $(".tanceng_iPad").addClass("disno");
        $(".tanceng_flow").removeClass("disno");

        $("#btn_know").click(function () {

          $(".tanceng_flow").addClass("disno");
          $(".tanceng_morePer").removeClass("disno");

        });
      });
    });
  });

  function close_tanceng(clicked,mengceng,tanceng) {
    $(clicked).click(function () {
      $(mengceng).addClass("disno");
      $(tanceng).addClass("disno");
    })
  }
  close_tanceng("#close",".mengceng",".tanceng_morePer");
  close_tanceng("#back",".mengceng",".tanceng_gift");
});
