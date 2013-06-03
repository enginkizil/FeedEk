FeedEk jQuery RSS/ATOM Feed Plugin
======

**FeedEk** is an RSS/ATOM Feed Reader/Importer/Parser that is written with jQuery. 
You can obtain feeds easily from any domain.

[Plugin Homepage](http://jquery-plugins.net/FeedEk/FeedEk.html)

[Demo](http://jquery-plugins.net/FeedEk/FeedEk_demo.html)

 
## Usage
1- Include the Javascript resources into you pages <head>

     <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
     <script type="text/javascript" src="FeedEk.js"></script>

2- Add a placeholder for the widget to your page

    <div id="divRss"></div>

3- Add the Javascript that will populate the placeholder

      $('#divRss').FeedEk({
        FeedUrl : 'http://rss.cnn.com/rss/edition.rss',
        MaxCount : 5,
        ShowDesc : true,
        ShowPubDate:true,
        DescCharacterLimit:100,
        TitleLinkTarget:'_blank'
      });
    

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
- **PurgeHtml**
  Option to remove from the Feed Item Description html. Default is `true`

## Demo

[Plugin Homepage](http://jquery-plugins.net/FeedEk/FeedEk.html)

[Demo](http://jquery-plugins.net/FeedEk/FeedEk_demo.html)

