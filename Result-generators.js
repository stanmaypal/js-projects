<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
  <title>Code Zack Result Generator</title>
</head>
<body>
  <div class="container">
        <h1 style="text-align: center;">Code Zack Result Generator</h1>
        <form>
         <div class="mb-3">
            <label for="name" class="form-label">Name</label>
          <input type="text" id="name" class="form-control" name="">
         </div>

         <div class="mb-3">
            <label class="form-label">Roll No</label>
          <input type="text" id="roll" class="form-control" name="">

         </div>
         <div class="mb-3">
          <label class="form-label"> Class</label>
           <select class="form-select" id="cls">
            <option>--Select--</option>
             <option value="I">I</option>
             <option value="II">II</option>
               <option value="III">III</option>
             <option value="IV">IV</option>
           </select>
         </div>
           <div class="mb-3">
            <label class="form-label">Hindi</label>
          <input type="text" id="hi" class="form-control" name="">

         </div>
           <div class="mb-3">
            <label class="form-label">English</label>
          <input type="text" id="en" class="form-control" name="">

         </div>
           <div class="mb-3">
            <label class="form-label">Math</label>
          <input type="text" id="ma" class="form-control" name="">

         </div>

           <div class="mb-3">
            <label class="form-label">History</label>
          <input type="text" id="hy" class="form-control" name="">

         </div>
           <div class="mb-3">
            <label class="form-label">Science</label>
          <input type="text" id="sc" class="form-control" name="">

         </div>
<div class="mb-3" style="text-align: center;">
  <input type="button" value="Submit" class="btn btn-info" onclick="data()" name="">
</div>
        </form>
  </div>
  <!--Result Page Start Here-->

  <div class="container" style="padding-top: 220px">
    <h1 style="text-align: center;" class="title">Code Zack Coding School</h1>
<div>
  <button class="btn btn-info" style="float: right;" onclick="window.print()">Print</button>
</div>
    <p><strong>Name : </strong> <span id="n1"></span></p>
    <p><strong>Class : </strong> <span id="c1"></span></p>
    <p><strong>Roll No : </strong> <span id="r1"></span></p>


    <div>
      <table class="table table-border">
        
        <tr class="bg-info">
          <th>Subject</th>
          <th>Marks</th>
        </tr>
        <tr>
          <td>Hindi</td>
          <td id="H"></td>
        </tr>
         <tr>
          <td>English</td>
          <td id="E"></td>
        </tr>
         <tr>
          <td>Math</td>
          <td id="M"></td>
        </tr>
         <tr>
          <td>History</td>
          <td id="HY"></td>
        </tr>
         <tr>
          <td>Science</td>
          <td id="S"></td>
        </tr>
<!--Total Marks-->
        <tr>
          <td><STRONG>Total</STRONG> </td>
          <td id="T"></td>
        </tr>
        <tr>
          <td><STRONG>Percentage</STRONG> </td>
          <td id="P"></td>
        </tr>
      </table>
    </div>
  </div>

  <script type="text/javascript">
    function data() {
      let  name=document.getElementById('name').value;
      let  roll=document.getElementById('roll').value;
      let  cls=document.getElementById('cls').value;

      //now get subject value
      let HI=parseInt(document.getElementById('hi').value);
      let EN=parseInt(document.getElementById('en').value);
      let MA=parseInt(document.getElementById('ma').value);
      let HY=parseInt(document.getElementById('hy').value);
      let SC=parseInt(document.getElementById('sc').value);
      
      //sum of all Marks
      let sum=HI+EN+MA+HY+SC;

      let per=sum/5;



      document.getElementById('n1').innerHTML=name;
      document.getElementById('c1').innerHTML=cls;
      document.getElementById('r1').innerHTML=roll;
 // now assign all Marks value


 document.getElementById('H').innerHTML=HI;
 document.getElementById('E').innerHTML=EN;
 document.getElementById('M').innerHTML=MA;
 document.getElementById('HY').innerHTML=HY;
 document.getElementById('S').innerHTML=SC;

 document.getElementById('T').innerHTML=sum+"/500";
 document.getElementById('P').innerHTML=per+" %";




      // body...
    }
  </script>


</body>
</html>
