// global 
var set;
var sum;
var setlength;

var result=0;
// value input
function input()
{

    var inputSet = document.getElementById("set").value;
    var inputSum = document.getElementById("sum").value;
   
   
    if(inputSet=="" || inputSum=="")
        {   
            alert("Cannot be empty");
        }


   
    inputSet = inputSet.toString();
    inputSet= inputSet.split(",");
    console.log("set-");
    console.log(inputSet);
    set=inputSet; 
    setlength = inputSet.length;
    console.log("length-"+setlength);
    console.log("sum -"+ inputSum);
    sum= inputSum;

    /// calling for sum of subset
    var subset =[];
    subsetfind(subset, 0, 0, 0);
    nosolutionCheck();
     
}
// reset value
function resetValues()
{
    document.getElementById("set").value="";
    document.getElementById("sum").value="";
    var p=  document.getElementById("result");
    p.textContent="";
    result= 0;
    console.log("Reset");

}

// Sum of Subset Problem
//  set , setlength 
function subsetfind(subset,subsetSize,subTotal,subCount)
{
    console.log("subset find "+ " subset--"+ subset+ " subsize--"+ subsetSize+ " subtotal--"+ subTotal+ "subcount--"+ subCount);
    if( subTotal == sum)
     {
       result= result+1;
        display(subset,subsetSize);    
        subsetfind(subset,parseInt(subsetSize)-1,parseInt(subTotal)-parseInt(set[subCount]),parseInt(subCount)+1);    //for some other subsets
      
        return;
     }
     else 
     {
        var i;
        for( i = subCount; i < setlength; i++ ) {     //find node 
           subset[parseInt(subsetSize)] = set[i];
           subsetfind(subset,parseInt(subsetSize)+1,parseInt(subTotal)+parseInt(set[i]),i+1);   
        }
      

     }
}

function display(subset, subsetSize)
{ 
    subset = subset.slice(0,subsetSize);
    console.log("result "+ subset);
    
     var p=  document.getElementById("result");
     var text = document.createTextNode("{"+subset+"}");

     var br = document.createElement("br");// <br/>
    // appending to p tag 
    p.appendChild(text);
    p.appendChild(br);

}

function nosolutionCheck()
{
    if(result==0)
    {
        var p=  document.getElementById("result");
        p.textContent="No Solution";
    }
   
}