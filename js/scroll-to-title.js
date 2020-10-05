$("#down-arrow").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#jump-here").offset().top - 20,
    },
    500
  );
});
