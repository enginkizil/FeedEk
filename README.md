FeedEk jQuery RSS/ATOM Feed Plugin
======

**FeedEk** is a jQuery plugin for parsing and displaying RSS and Atom feeds. FeedEk uses **YQL API** to retrieve feeds. 

You can obtain feeds easily from any domain. No need for server-side scripts.


[Plugin Homepage](http://jquery-plugins.net/FeedEk/FeedEk.html)

[Demo](http://jquery-plugins.net/FeedEk/FeedEk_demo.html)

 
## Usage
1- Include jQuery and FeedEk plugin scripts into your page.

     <script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
     <script type="text/javascript" src="FeedEk.js"></script>

2- Add a placeholder for the plugin to your page.

    <div id="divRss"></div>

3- Call the plugin.

**- Basic**

    $('#divRss').FeedEk({
        FeedUrl : 'http://jquery-plugins.net/rss',
      });

**- With Options**

    $('#divRss').FeedEk({
        FeedUrl : 'http://jquery-plugins.net/rss',
        MaxCount : 5,
        ShowDesc : true,
        ShowPubDate:true,
        DescCharacterLimit:100,
        TitleLinkTarget:'_blank'
      });

**- With Date Format Options**

    ('#divRss').FeedEk({
        FeedUrl : 'http://jquery-plugins.net/rss',
        MaxCount : 5,
        ShowDesc : true,
        ShowPubDate:true,
        DescCharacterLimit:100,
        TitleLinkTarget:'_blank',
		DateFormat:'MM/DD/YYYY',
		DateFormatLang:'en'
      });

**IMPORTANT :** [Moment.js](http://momentjs.com) is used for DateFormat options. You must include [Moment.js](http://momentjs.com/downloads/moment.min.js) for date format.
If you want to localize date format (day name, month name) you must include [Moment.js with langs](http://momentjs.com/downloads/moment-with-langs.min.js) instead.

Please visit [format examples](http://momentjs.com/docs/#/displaying/format/) and [languages](http://momentjs.com). for more information.

Check out [FeedEk examples](http://jquery-plugins.net/FeedEk/FeedEk-examples.html) page for date format usage.


## Options

- **FeedUrl**
  Your Feed Url and it's required
- **MaxCount**
  Feed Item Count. Default is `5`
- **ShowDesc**
  Option to show Feed Item Description. Default is `true`
- **ShowPubDate**
  Option to show Feed Item Publish Date. Default is `true`
- **DescCharacterLimit**
  Feed Description Characters Limit Count. Default is no limit
- **TitleLinkTarget**
  Option for Feed Title Link Target. Default is `_blank`
- **DateFormat**
  Option for Feed Publish Date Format. Default is none
- **DateFormatLang**
  Option for Feed Publish Date Format Language for localization. Default is `en`

## Demo

[Plugin Homepage](http://jquery-plugins.net/FeedEk/FeedEk.html)

[Demo](http://jquery-plugins.net/FeedEk/FeedEk_demo.html)

