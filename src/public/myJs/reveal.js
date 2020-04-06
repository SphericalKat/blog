var $el, $ps, $up, totalHeight;

$(".sidebar-box .button").click(function() {
      
  totalHeight = 0
                            //need to remove gradient -> display: none on expansion
  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more')");
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      "height": $up.height(),
      "max-height": 200
    })
    .animate({
      "height": totalHeight
    });
  $p.fadeOut();
  return false;
    
});