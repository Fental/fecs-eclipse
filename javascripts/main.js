/**
 * @file JS 入口文件
 * @author Fental <fengeeker@gmail.com>
 */

(function (win, doc) {
    var input = doc.getElementById('update-link');
    input.onmouseover = function () {
        input.select();
    };
})(window, document);