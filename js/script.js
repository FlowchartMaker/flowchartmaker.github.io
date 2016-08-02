var main = function(){
	
	$(".sidebar").draggable();
	$(".flowchartElement").draggable();
	
	$(".music").click(function() {
    $(".flowchart").append("<div class='M flowchartElement'><p><center><br>M</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".M").draggable();
  });
	
	$(".chorus").click(function() {
    $(".flowchart").append("<div class='C flowchartElement'><p><center><br>C</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".C").draggable();
  });
	
	$(".verse").click(function() {
    $(".flowchart").append("<div class='V flowchartElement'><p><center><br>V</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".V").draggable();
  });
	
	$(".verse1").click(function() {
    $(".flowchart").append("<div class='V1 flowchartElement'><p><center><br>V1</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".V1").draggable();
  });
	
	$(".verse2").click(function() {
    $(".flowchart").append("<div class='V2 flowchartElement'><p><center><br>V2</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".V2").draggable();
  });
	
	$(".verse3").click(function() {
    $(".flowchart").append("<div class='V3 flowchartElement'><p><center><br>V3</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".V3").draggable();
  });
	
	$(".bridge").click(function() {
    $(".flowchart").append("<div class='B flowchartElement'><p><center><br>B</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".B").draggable();
  });
	
	$(".endtag").click(function() {
    $(".flowchart").append("<div class='E flowchartElement'><p><center><br>E</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".E").draggable();
  });
	
	$(".development").click(function() {
    $(".flowchart").append("<div class='D flowchartElement'><p><center><br>D</center></p></div>");
		$(".flowchartElement").dblclick(function() {
      $(this).remove();
    });
    $(".D").draggable();
  });
	
};
$(document).ready(main);
