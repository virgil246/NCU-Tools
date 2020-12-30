// ==UserScript==
// @name         中央大學教學評量自動填寫
// @namespace    https://github.com/virgil246
// @version      0.1
// @description  我就懶
// @author       virgil246
// @match        https://cis.ncu.edu.tw/iNCU/academic/course/courseEvaluate*
// @grant        none
// ==/UserScript==
// @require http://code.jquery.com/jquery-2.1.0.min.js
// @run-at  document-end

(function() {
    'use strict';

    
    var full_table= document.querySelector("body > div.container-fluid > div > div.row > div.col-xs-12.col-sm-9.col-lg-10 > table:nth-child(4)")
    var table_row=full_table.rows
    for (let index = 0; index < table_row.length; index++) {
        const element = table_row[index];
        try {
            element.querySelectorAll("input")[0].checked=true;

        } catch (error) {

        }
        console.log(element);

    }
    $( "input[type='submit']" ).click();

    // Your code here...
})();