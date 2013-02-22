/*
* FeedEk jQuery RSS/ATOM Feed Plugin 
* http://jquery-plugins.net/FeedEk/FeedEk.html
* Author : Engin KIZIL 
* http://www.enginkizil.com
*/

(function($){$.fn.FeedEk=function(opt){
  var def={
    FeedUrl:'',
    MaxCount:5,
    ShowDesc:true,
    ShowPubDate:true,
    ExpandCollapse:false};
    
  if(opt){
    $.extend(def,opt)
  }
  var idd=$(this).attr('id');
  if(def.FeedUrl==null||def.FeedUrl==''){
    $('#'+idd).empty();
    return
  }
  var pubdt;
  $('#'+idd).empty().append('<div style="text-align:left; padding:3px;"><img src="loader.gif" /></div>');
  $.ajax({url:'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+def.MaxCount+'&output=json&q='+encodeURIComponent(def.FeedUrl)+'&callback=?',
          dataType:'json',
          success:function(data){
            $('#'+idd).empty();
            $.each(data.responseData.feed.entries,function(i,entry){
              if(def.ExpandCollapse){
                $('#'+idd).append('<div class="ExpandCollapseItem" id="ExpandCollapseItem' + i + '"><a class="ExpandCollapseItemHref" href="#">Toggle</a></div>');
              }
              $('#'+idd).append('<div class="ItemTitle" id="ItemTitle' + i + '"><a href="'+entry.link+'" target="_blank" >'+entry.title+'</a></div>');
              if(def.ShowPubDate){
                pubdt=new Date(entry.publishedDate);
                $('#'+idd).append('<div class="ItemDate" id="ItemDate' + i + '">'+pubdt.toLocaleDateString()+'</div>')
              }
              if(def.ShowDesc){
                $('#'+idd).append('<div class="ItemContent" id="ItemContent' + i + '">'+entry.content+'</div>');
              }
            }
            );            
$('.ExpandCollapseItemHref').click(function(evt){
   evt.stopPropagation(); 
   
   x = $(evt.target);
   i = x.parent().attr('id');
   i = i.replace('ExpandCollapseItem','ItemContent');
   $('#'+i).toggle();
   return false;
});            
          }
         })
}})(jQuery);