FeedEk jQuery RSS/ATOM Feed Plugin
======

**FeedEk** is an RSS/ATOM Feed Reader/Importer/Parser that is written with jQuery. 
You can obtain feeds easily from any domain.

[Demo](http://www.suabo.de/opensource/jquery/FeedEk/FeedEk_demo.html)

 
## Usage
1) Include the Javascript resources into you pages <head>


     <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
     <script type="text/javascript" src="FeedEk.js"></script>

If you want to enable Flips u need to load the lib, too


     <script type="text/javascript" src="jquery.flips.min.js"></script>

2) Add a placeholder for the widget to your page


    <div id="divRss"></div>

3) Add the Javascript that will populate the placeholder


      $('#divRss').FeedEk({
        FeedUrl : 'http://rss.cnn.com/rss/edition.rss',
        MaxCount : 5,
        ShowDesc : true,
        PurgeHtml: true,
        ShowPubDate:true,
        DescCharacterLimit:100,
        TitleLinkTarget:'_blank',
        ShowReadOn: false,
        EnableFlips: false,        
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
- **ShowReadOn**
  Show a read on Link if CharacterLimit cut off the description. Default is `false`
- **EnableFlips**
  Enable the JQuery Flips Plugin integration. Default is `false`
- **PurgeHtml**
  Option to remove from the Feed Item Description html. Default is `true`

## Demo

[Demo](http://www.suabo.de/opensource/jquery/FeedEk/FeedEk_demo.html)

## Contributor

Marcel Grolms - http://www.suabo.de 
- Added EnableFlips & ReadOn functionality
- Fixed some bugs: CharacterLimit will work now with the CharacterLimit parameter, added </li>

davidemoro
- Added PurgeHTML parameter

lexinerus
- Added a function for success event

Engin KIZIL - http://www.enginkizil.com
- FeedEk jQuery RSS/ATOM Feed Plugin v1.1.2 [Plugin Website](http://jquery-plugins.net/FeedEk/FeedEk.html)