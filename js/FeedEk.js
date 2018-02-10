/*
* FeedEk jQuery RSS/ATOM Feed Plugin v3.0 with YQL API
* http://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL http://www.enginkizil.com   
*/

(function ($) {
    $.fn.FeedEk = function (opt) {
        var def = $.extend({
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            DescCharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang:"en",
            ResultSortBy: "",
            ResultDescend: false
        }, opt);
        
        var id = $(this).attr("id"), i, s = "", dt;
        $("#" + id).empty();
        if (def.FeedUrl == undefined) return;       
        $("#" + id).append('<img src="loader.gif" />');

        var YQLstr = 'SELECT * FROM rss WHERE url ="' + def.FeedUrl + '"';
        
        if (def.ResultSortBy == "title") {
			YQLstr = YQLstr + ' | sort(field="title", descending="'+def.ResultDescend.toString()+'")';
		}
		else if (def.ResultSortBy == "pubdate") {
			YQLstr = YQLstr + ' | sort(field="pubDate", descending="'+def.ResultDescend.toString()+'")';
		}
		
		YQLstr = YQLstr + ' | truncate(count=' + def.MaxCount + ')';
		
		console.log(YQLstr);

        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                if (!(data.query.results.item instanceof Array)) {
                    data.query.results.item = [data.query.results.rss];
                }
                $.each(data.query.results.item, function (e, itm) {
                    s += '<li><div class="itemTitle"><a href="' + itm.link + '" target="' + def.TitleLinkTarget + '" >' + itm.title + '</a></div>';
                    
                    if (def.ShowPubDate){
                        dt = new Date(itm.pubDate);
                        s += '<div class="itemDate">';
                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.locale(def.DateFormatLang);
                                s += moment(dt).format(def.DateFormat);
                            }
                            catch (e){s += dt.toLocaleDateString();}                            
                        }
                        else {
                            s += dt.toLocaleDateString();
                        }
                        s += '</div>';
                    }
                    if (def.ShowDesc) {
                        s += '<div class="itemContent">';
                         if (def.DescCharacterLimit > 0 && itm.description.length > def.DescCharacterLimit) {
                            s += itm.description.substring(0, def.DescCharacterLimit) + '...';
                        }
                        else {
                            s += itm.description;
                         }
                         s += '</div>';
                    }
                });
                $("#" + id).append('<ul class="feedEkList">' + s + '</ul>');
            }
        });
    };
})(jQuery);
