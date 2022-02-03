FeedEk jQuery RSS/ATOM Feed Plugin
======

**FeedEk** is a jQuery plugin for parsing and displaying RSS and Atom feeds. You can obtain feeds easily from any domain. No need for server-side scripts. [Feed API](https://jquery-plugins.net/feed-api) is used for fetching RSS/Atom feed data.

[Plugin Homepage](https://jquery-plugins.net/FeedEk/FeedEk.html)

[Demo](https://jquery-plugins.net/FeedEk/FeedEk_demo.html)

[Feed API Docs](https://jquery-plugins.net/feed-api)

 
## Usage
1- Include jQuery and FeedEk plugin scripts into your page.
```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript" src="FeedEk.min.js"></script>
```
2- Add a placeholder for the plugin to your page.
```html
<div id="divFeed"></div>
```
3- Call the plugin.

**- Basic**
```javascript
$('#divFeed').FeedEk({
    FeedUrl : 'https://jquery-plugins.net/rss',
});
```
**- Multiple Feed Url**
```javascript
$('#divFeed').FeedEk({
    FeedUrl : ['https://jquery-plugins.net/rss','http://rss.cnn.com/rss/cnn_topstories.rss']
});
```
**- With Options**
```javascript
$('#divFeed').FeedEk({
    FeedUrl : 'https://jquery-plugins.net/rss',
    MaxCount : 5,
    ShowDesc : true,
    ShowPubDate:true,
    DescCharacterLimit:100,
    TitleLinkTarget:'_blank',
    DateFormat : 'MM/dd/yyyy',
    DateFormatLang : 'en',
    Offset: 5,
    ShowAuthor: true,
    AuthorLabel:"Author:",
    Success: function (feedItems) { },
    Error: function (error) { }
});
```

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
- **Offset**
  Offset option for pagination. Default is `0`
- **ShowAuthor**
  Option to show Author of Feed Item. Default is `false`
- **AuthorLabel**
  Option to set title of author label. Default is `Author:`. ShowAuthor option must be true to set AuthorLabel.
- **Success**
  Callback to manipulate the DOM element wich contains the Feed Items after the load.
- **Error**
  Callback when error occurs during fetching feeds.

## Demo

[Plugin Homepage](https://jquery-plugins.net/FeedEk/FeedEk.html)

[Demo](https://jquery-plugins.net/FeedEk/FeedEk_demo.html) 
