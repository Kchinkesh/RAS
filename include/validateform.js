function validatefrm()
{
	var valid=0;
		var t1=document.getElementById('fname').value.length;
		if(t1==0)
			{
				document.getElementById('a').innerHTML='*';
				valid=1;
			}
		else
			document.getElementById('a').innerHTML='';
		
		var t2=document.getElementById('user').value.length;
		if(t2==0)
		{
			document.getElementById('b').innerHTML='*';
			valid=1;
		}
		else
			document.getElementById('b').innerHTML='';
		
		var t3=document.getElementById('pass').value.length;
		if(t3<6)
			{
				document.getElementById('c').innerHTML='*';
				valid=1;
			}
		else
			document.getElementById('c').innerHTML='';
		
		var t4=document.getElementById('pass').value;
		var t5=document.getElementById('rpass').value;
		if(t4!=t5)
		{
			document.getElementById('d').innerHTML="password didn't match";
			valid=1;
		}
		else
			document.getElementById('d').innerHTML='';
		
		if(document.frm.r1[0].checked)
	        document.getElementById("e").innerHTML = '';
	    else if(document.frm.r1[1].checked)
	        document.getElementById("e").innerHTML = '';
	    else 
	        document.getElementById("e").innerHTML = '*';
		
		var reg_email = /^[a-z0-9]*\.?[a-z0-9]*@[a-z0-9]*\.[a-z]*\.?[a-z]*$/;
		var email = document.frm.email.value;
		if(!reg_email.test(email))
		{
			document.getElementById("e").innerHTML = '*';
			valid = 1;
		}
		else
			document.getElementById("e").innerHTML = '';
		
	    var mob1=document.frm.mobile.value;
	    var mob_Exp=/[0-9]$/;
	    if(mob_Exp.test(mob1))
	    {
	        document.getElementById("f").innerHTML = '';
	    }
	    else
	    {
	    	document.getElementById("f").innerHTML = '*';
	    	valid=1;
	    }
	        
	    var t7=document.getElementById('ans').value.length;
	    if(t7==0)
		{
			document.getElementById('g').innerHTML='*';
			valid=1;
		}
		else
			document.getElementById('g').innerHTML='';
		
		if(valid==1)
		      return false;
		else
		      return true;
		
}