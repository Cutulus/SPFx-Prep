<style>
</style>
<table>
	<tr>
		<td><div if"app">Starter file</div></td>
	</tr>
</table>
<script src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js" type="text/javascript"></script>
<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.ui.dialog.js"></script>
<script type="text/javascript">
	var x;
	$(document).ready(function() {
// Do something here after load
		console.log("ready");
	});
	function loadWebsite(){
		clientContext = SP.ClientContext.get_current();
		website = clientContext.get_web();
		clientContext.load(website);
		clientContext.executeQueryAsync(onRequestSucceeded, onFail);
	}
	function onRequestSucceeded(){
		//add actions here
	}
	function onFail(sender, args){
		statusId = SP.UI.Status.addStatus("Error: " + args.get_message());
		SP.UI.Status.setStatusPriColor(statusId, 'red');
	}
	SP.SOD.executeFunc('sp.js', 'SP.ClientContext', loadWebsite);
</script>
