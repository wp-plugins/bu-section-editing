(function(b){if(!("undefined"===typeof bu||"undefined"===typeof bu.plugins.navigation||"undefined"===typeof bu.plugins.navigation.tree)){var g=bu.plugins.navigation;g.trees.buse_perm_editor=function(j,e){e=e||{};var c=g.trees.base(j,e),a=c.data,f=b.extend(c.config,j||{}),h=c.$el,d=b.inArray("crrm",a.treeConfig.plugins);-1<d&&(a.treeConfig.plugins.splice(d,1),"undefined"!==typeof a.treeConfig.crrm&&delete a.treeConfig.crrm);d=b.inArray("dnd",a.treeConfig.plugins);-1<d&&(a.treeConfig.plugins.splice(d,
1),"undefined"!==typeof a.treeConfig.dnd&&delete a.treeConfig.dnd);a.treeConfig.types={types:{"default":{},denied:{},"denied-desc-allowed":{},"denied-desc-unknown":{},allowed:{},"allowed-desc-denied":{},"allowed-desc-unknown":{}}};a.treeConfig.ui={select_limit:1};a.treeConfig.json_data.ajax={url:f.rpcUrl,type:"GET",cache:!1,data:function(a){return{group_id:f.groupID,node_prefix:f.nodePrefix,post_type:f.postType,query:{child_of:a.attr?e.stripNodePrefix(a.attr("id")):0}}},success:function(a){return a.posts},
error:function(){}};a.treeConfig.json_data.progressive_render=!1;var k=function(a){a=!a||-1==a?h.find("> ul > li"):b.jstree._reference(h)._get_node(a);var d,e,c,g;a.each(function(){d=b(this);d.find("li").andSelf().each(function(){c=b(this).data("editable")?"denied":"allowed";g="allowed"==c?f.allowLabel:f.denyLabel;e=b('<button class="edit-perms '+c+'"></button>').text(g);b(this).children("a").not(":has(.edit-perms)").append(e)})})};h.bind("open_node.jstree create_node.jstree clean_node.jstree refresh.jstree",
function(a,b){k(b.rslt.obj)});h.bind("loaded.jstree",function(){k()});h.addClass("buse-perm-editor");return c}}})(jQuery);