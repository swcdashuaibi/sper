import $ from 'jquery'

$(function () {
    $("li:odd").css('backgroundColor',"red");
    $("li:even").css('backgroundColor',function () {
        return '#'+'747474'
    })
})