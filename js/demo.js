 $(function () {
        $('#txtUrl').val('http://rss.cnn.com/rss/edition.rss');
        $('#txtCount').val('5');
        $('#chkDate').attr('checked', 'checked');
        $('#chkDesc').attr('checked', 'checked');


        $('#divRss').FeedEk({
            FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true
        });

        $('#divSrc').toggle();

    $("#linkBox").click(function () {
        $('#divSrc').toggle();
    });
	
	$("#btnChangeFeedUrl").click(function() {
		var cnt = 5;
		var showDate = new Boolean();
		showDate = true;

		var showDescription = new Boolean();
		showDescription = true;

		if ($('#txtCount').val() != "") cnt = parseInt($('#txtCount').val());
		if (!$('#chkDate').is(':checked')) showDate = false;
		if (!$('#chkDesc').is(':checked')) showDescription = false;

		$('#divRss').FeedEk({
			FeedUrl: $('#txtUrl').val(),
			MaxCount: cnt,
			ShowDesc: showDescription,
			ShowPubDate: showDate
		});

	});
	
 });




