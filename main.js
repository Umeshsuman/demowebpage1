jQuery(document).ready(function(){
    $("#a1").focus();
    $("#b1").hide();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").hide();
    $("#b1").click(function(){
        $("#a1").show();
        $("#a2").hide();
        $("#a3").hide();
        $("#a4").hide();
        $("#b1").hide();
        $("#b2").show();
        $("#b3").show();
        $("#b4").show();
    });
    $("#b2").click(function(){
        $("#a2").show();
        $("#a1").hide();
        $("#a3").hide();
        $("#a4").hide();
        $("#b2").hide();
        $("#b1").show();
        $("#b3").show();
        $("#b4").show();
    });
    $("#b3").click(function(){
        $("#a3").show();
        $("#a1").hide();
        $("#a2").hide();
        $("#a4").hide();
        $("#b3").hide();
        $("#b1").show();
        $("#b2").show();
        $("#b4").show();
    });
    $("#b4").click(function(){
        $("#a4").show();
        $("#a1").hide();
        $("#a2").hide();
        $("#a3").hide();
        $("#b4").hide();
        $("#b1").show();
        $("#b2").show();
        $("#b3").show();
    });
});