/**
 * Created by lmw on 15/04/2014.
 */



$(document).ready( function () {
    var getWordFromDWordArray = function (dwordArray, index) {
        return index % 2 ? dwordArray[index >> 1] & 0xffff : (dwordArray[index >> 1] >> 16) & 0xffff;
    };

    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var letnum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789";

    var generate = function (){
        var key = $(".keyinput").val() + "_" + $(".siteinput").val().toLowerCase() + "_" + $(".userinput").val();


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
});
