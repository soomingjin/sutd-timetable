function display_modules( mods ){
	$.each( mods, function(k,s){
		var t=k.split('.');
		var panel = $("<div class='panel panel-primary'/>");
		var phead = $("<div class='panel-heading'/>");
		var ptitle = $("<h3 class='panel-title'/>");
		var ahead=$("<a data-toggle='collapse'/>").attr({'data-parent':'#l'+t[0],'href':'#m'+t[1]});

		var sc = $("<ul class='list-group'/>");
		$.each( s.sections.sort(), function(i,v){
			var li = $("<li class='list-group-item list-group-item-info'/>");
			var cb = $("<input type='checkbox'>").attr('value',k+'/'+v[0]);
			var lz = $("<label/>").text(v[0]+' (Updated: '+v[1]+')').prepend(cb);
			sc.append( li.append( $("<div class='checkbox'/>").html(lz) ) );
		});

		panel.html(phead.html(ptitle.html(ahead.text(k+' - '+s.title))));
		$("<div class='panel-collapse collapse'/>").attr('id','m'+t[1]).html(sc).appendTo(panel);
		$('#l'+t[0]).append(panel);
	});
}
