jQuery(function(b){b("#bulk-edit #post_parent").bind("change",function(){var a=b("#post_parent option:selected").val();-1!=a&&b.ajax({url:ajaxurl,data:{action:"buse_can_edit",post_id:a},type:"POST",success:function(a){!1==a.can_edit&&(alert(buse_post.cantEditParentNotice),b('#bulk-edit #post_parent [value="-1"]').attr("selected","selected"))},error:function(){}})});b("#inline-edit #post_parent").bind("change",function(){var a=b("#post_parent option:selected").val(),c=b(this).closest("tr").attr("id").split("-"),
c=c[c.length-1];"publish"==b("#edit-"+c+' [name="_status"] option:selected').val()&&b.ajax({url:ajaxurl,data:{action:"buse_can_move",post_id:c,parent_id:a},type:"POST",success:function(a){!1==a.can_edit&&(alert(buse_post.cantMovePostNotice),b('#post_parent [value="'+a.original_parent+'"]').attr("selected","selected"))},error:function(){}})});void 0!==window.inlineEditPost&&(inlineEditPost.pre_edit=function(a){if("object"==typeof a)var c=this.getId(a);b.ajax({url:ajaxurl,data:{action:"buse_can_edit",
post_id:c},type:"POST",id:a,success:function(a){inlineEditPost.post_edit(this.id);var c="#edit-"+a.post_id;!0==a.can_edit?0==b(c+' [name="_status"] [value="publish"]').length&&b(c+' [name="_status"]').prepend('<option value="publish">'+buse_post.publishLabel+"</option>"):b(c+' [name="_status"] [value="publish"]').remove();b(c+' [name="_status"] [value="'+a.status+'"]').attr("selected","selected")},error:function(){}})},inlineEditPost.post_edit=inlineEditPost.edit,inlineEditPost.edit=function(a){inlineEditPost.pre_edit(a)})});