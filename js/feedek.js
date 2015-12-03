/*
* FeedEk jQuery RSS/ATOM Feed Plugin v2.0
* http://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL http://www.enginkizil.com
* Modifications by gormsby@umn.edui to address the following needs:
* - Requesting feeds over https to avoid mixed content warnings/blocks.
* - Breaking summary on word boundary after
*   http://jquery-plugins.net/FeedEk/FeedEk.html#comment-1324823216.
* - Changing format of html output to correspond to our home page needs.
*/

(function ($) {
    $.fn.FeedEk = function (opt) {
        var def = $.extend({
            FeedUrl: 'http://www.continuum.umn.edu/feed/json',
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            CharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang:"en"
        }, opt);

        var id = $(this).attr("id"), i, s = "",dt;
        $("#" + id).empty().append('<i class="icon-spin"></i>');

        $.ajax({
            url: def.FeedUrl,
            jsonp: 'callback',
            dataType: 'jsonp',
            success: function (data) {
                $("#" + id).empty();
                $.each(data.responseData.feed.entries, function (e, item) {
                    s += '<p><strong><a href="' + item.link + '" target="' + def.TitleLinkTarget + '" >' + item.title + "</a></strong><br />";

                    if (def.ShowPubDate){
                        dt= new Date(item.publishedDate);
                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.lang(def.DateFormatLang);
                                s += '<div class="itemDate">' + moment(dt).format(def.DateFormat) + "</div>";
                            }
                            catch (e){s += '<div class="itemDate">' + dt.toLocaleDateString() + "</div>";}
                        }
                        else {
                            s += '<div class="itemDate">' + dt.toLocaleDateString() + "</div>";
                        }
                    }
                    if (def.ShowDesc) {
                        if (def.DescCharacterLimit > 0 && item.content.length > def.DescCharacterLimit) {
                            s += '<div class="itemContent">' + item.content.substr(0, def.DescCharacterLimit).split(" ").slice(0,-1).join(" ") + "...</div>";
                        }
                        else {
                            s += '<div class="itemContent">' + item.content + "</div>";
                        }
                    }
                    s+= '</p>';
                });
                $("#" + id).append(s);
            }
        });
    };
})(jQuery);
