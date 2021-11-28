$('.spoilerOne').hide();

$('.spoilerButtonOne').on('click', function () {
  $('.spoilerButtonOne').hide();
  $('.spoilerOne').slideDown(2000);
});
$('.spoilerTwo').hide();

$('.spoilerButtonTwo').on('click', function () {
  $('.spoilerButtonTwo').hide();
  $('.spoilerTwo').slideDown(2000);
});