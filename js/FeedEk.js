/*
* FeedEk jQuery RSS/ATOM Feed Plugin v3.0 with YQL API
* http://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL http://www.enginkizil.com
*/

(function ($) {
    $.fn.FeedEkRss = function (opt) {
        var def = $.extend({
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            DescCharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang:"en"
        }, opt);

        var id = $(this).attr("id"), i, s = "", dt;
        $("#" + id).empty();
        if (def.FeedUrl == undefined) return;
        $("#" + id).append('<img src="loader.gif" />');

        var YQLstr = 'SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="' + def.FeedUrl + '" LIMIT ' + def.MaxCount;

        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                if (!(data.query.results.rss instanceof Array)) {
                    data.query.results.rss = [data.query.results.rss];
                }
                $.each(data.query.results.rss, function (e, itm) {
                    s += '<li><div class="itemTitle"><a href="' + itm.channel.item.link + '" target="' + def.TitleLinkTarget + '" >' + itm.channel.item.title + '</a></div>';

                    if (def.ShowPubDate){
                        dt = new Date(itm.channel.item.pubDate);
                        s += '<div class="itemDate">';
                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.lang(def.DateFormatLang);
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
                         if (def.DescCharacterLimit > 0 && itm.channel.item.description.length > def.DescCharacterLimit) {
                            s += itm.channel.item.description.substring(0, def.DescCharacterLimit) + '...';
                        }
                        else {
                            s += itm.channel.item.description;
                         }
                         s += '</div>';
                    }
                });
                $("#" + id).append('<ul class="feedEkList">' + s + '</ul>');
            }
        });
    };

    $.fn.FeedEkAtom = function (opt) {
    var def = $.extend({
        MaxCount: 5,
        ShowDesc: true,
        ShowPubDate: true,
        DescCharacterLimit: 0,
        TitleLinkTarget: "_blank",
        DateFormat: "",
        DateFormatLang:"en"
    }, opt);

    var id = $(this).attr("id"), i, s = "", dt;
    $("#" + id).empty();
    if (def.FeedUrl == undefined) return;
    $("#" + id).append('<img src="loader.gif" />');

    var YQLstr = 'SELECT entry FROM feednormalizer WHERE output="atom_1.0" AND url ="' + def.FeedUrl + '" LIMIT ' + def.MaxCount;

    $.ajax({
        url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?",
        dataType: "json",
        success: function (data) {
            $("#" + id).empty();
            console.log(data.query.results.feed);
            if (!(data.query.results.feed instanceof Array)) {
                data.query.results.feed = [data.query.results.feed];
            }
            $.each(data.query.results.feed, function (e, itm) {
                if (itm.entry.title.hasOwnProperty('type') ){
                  var title = itm.entry.title.content;
                }
                else{
                  var title = itm.entry.title;
                }
                s += '<li><div class="itemTitle"><a href="' + itm.entry.link.href + '" target="' + def.TitleLinkTarget + '" >' + title + '</a></div>';
                if (def.ShowPubDate){
                    dt = new Date(itm.entry.pubDate);
                    s += '<div class="itemDate">';
                    if ($.trim(def.DateFormat).length > 0) {
                        try {
                            moment.lang(def.DateFormatLang);
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
                    //console.log(itm.entry.summary.div.blockquote.p);
                    s += '<div class="itemContent">';
                    var summary = itm.entry.summary;
                    s += JSON.stringify(summary);
                    s += '</div>';
                }
            });
            $("#" + id).append('<ul class="feedEkList">' + s + '</ul>');
        }
    });
};

})(jQuery);
