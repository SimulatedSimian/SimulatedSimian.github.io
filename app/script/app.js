/**
 * Created by lmw on 15/04/2014.
 */

function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(document).ready( function () {
    var getWordFromDWordArray = function (dwordArray, index) {
        return index % 2 ? dwordArray[index >> 1] & 0xffff : (dwordArray[index >> 1] >> 16) & 0xffff;
    };

    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var letnum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789";

    var generate = function (){
        var key = $(".keyinput").val() + "_" + $(".siteinput").val().toLowerCase() + "_" + $(".userinput").val().toLowerCase();


        var sha = Sha256.hash(key);
        var passwd = letters[getWordFromDWordArray(sha, n) % letters.length];
        for (var n = 1; n < 16; n++) {
            passwd += letnum[getWordFromDWordArray(sha, n) % letnum.length];
        }

        $(".output").text(passwd);
    };

    $(".keyinput").on("change keydown paste input", generate);
    $(".siteinput").on("change keydown paste input", generate);
    $(".userinput").on("change keydown paste input", generate);
    $(button).click(function(e) {
        SelectText('output')
        document.execCommand('copy')
    });
});
