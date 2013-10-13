/* FeedEk jQuery RSS/ATOM Feed Plugin v1.1.3
*  http://jquery-plugins.net/FeedEk/FeedEk.html
*  Author : Engin KIZIL http://www.enginkizil.com
*  http://opensource.org/licenses/mit-license.php
*  Contributor: v1.1.3 Marcel Grolms http://www.suabo.de   
*/

(function ($) {
    $.fn.FeedEk = function (opt) {
        var def = $.extend({
            FeedUrl: "http://rss.cnn.com/rss/edition.rss",
            MaxCount: 5,
            ShowDesc: true,
            PurgeHtml: true,
            ShowPubDate: true,
            DescCharacterLimit: 0,
            TitleLinkTarget: "_blank",
            ShowReadOn: 0,
            EnableFlips: 0,
            Success: function(){}

        }, opt);

        var id = $(this).attr("id");
        var i;
        $("#" + id).empty().append('<img src="loader.gif" />');
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.MaxCount + "&output=json&q=" + encodeURIComponent(def.FeedUrl) + "&hl=en&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                var s = "";
                var item_content = "";

                $.each(data.responseData.feed.entries, function (e, item) {
                    s += '<li class="block"><div class="itemTitle"><a href="' + item.link + '" target="' + def.TitleLinkTarget + '" >' + item.title + "</a></div>";
                    if (def.ShowPubDate) {
                        i = new Date(item.publishedDate);
                        s += '<div class="itemDate">' + i.toLocaleDateString() + "</div>";
                    }                    
                    if (def.ShowDesc) {
                        if (def.PurgeHtml) {
                            item_content = $(item.content).text();
                            item_content = String(item_content).replace(/^\s+/g, '');
                        }
                        else {
                            item_content = item.content;
                        }
                        if (def.DescCharacterLimit > 0 && item.content.length > def.DescCharacterLimit) {
                            s += '<div class="itemContent">' + item_content.substr(0, def.DescCharacterLimit) + "...";
                            if (def.ShowReadOn) s += '<a class="readon" href="' + item.link + '" target="' + def.TitleLinkTarget + '" >read on</a>';
                            s += "</div>";                            
                        }
                        else {
                            s += '<div class="itemContent">' + item_content + "</div>";
                        }
                    }                    
                    s += '</li>';
                });
                $("#" + id).append('<ul class="feedEkList content">' + s + "</ul>");
                if(def.EnableFlips) {
                  $('#' + id).addClass('flips');  
                  $("#" + id).append('<div class="navigation"></div>');
                  $('#' + id).flips( { autorun_delay: 0, direction: 'left'   } );
                }
                def.Success();
            }
        });
    };
})(jQuery);
