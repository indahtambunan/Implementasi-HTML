
 $(document).ready(function(){
   $("#imageBrowes").change(function(){
     var File = this.files;

     if(File && File[0]){
       ReadImage(File[0]);

     }

   })
 })

 var ReadImage=function(file){
   var reader = new FileReader;
   var image = new Image;

   reader.readAsDataURL(file);
   reader.onload= function(_file){

     image.src=_file.target.result;
     image.onload=function(){

       var height = this.height;
       var width = this.width;
       var type = file.type;
       var size = ~~(file.size / 1024) + "KB";


       $("#targetImg").attr('src',_file.target.result);
       $("#description").text("Size:" + size + ", " + height + " X " + width + ", " + type + "");
       $("#imgPreview").show();

     }


   }

 }
 var clearPreview = function(){
   $("#imageBrowes").val('')
   $("#description").text('');
   $("#imgPreview").hide();


 }


function Data(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  }

//   // Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();

// function validateForm() {

//     var inputs, index;
//     var isValid = true;

//     inputs = document.getElementById("Paket Tour").getElementsByTagName("input");

//     for (index = 0; index < inputs.length; ++index) {
//         var currentInputValue = inputs[index].value;
//         if (currentInputValue == null || currentInputValue === "") {

//             isValid = false;
//         }

//     }
//     if (isValid == false) {
//       alert("Mohon lengkapi semua kolom");
//     } else {

//     }
//     return isValid;
// }

// $('#manual-ajax').click(function(event) {
// event.preventDefault();
// this.blur(); // Manually remove focus from clicked link.
// $.get(this.href, function(html) {
//   $(html).appendTo('body').modal();
// });
// });

// $('#menu-icon').click(function(event) {
// 	if ($('#menu-atas').attr('class') === "top-menu") {
// 		// console.log('tes ga');
// 		$('#menu-atas').addClass('responsive');
// 		$(".mainMenu").addClass('responsive');
// 		$("#drop").addClass('responsive');
// 	} else {
// 		$('#menu-atas').attr('class', 'top-menu');
// 		$(".mainMenu").removeClass('responsive');
// 		$("#drop").removeClass('responsive');
// 	}
// });

function modalShow() {
	$("#id_modal").show();
	$("#id_modal").css('animation-name', 'show_modal');
	// $(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide() {
	// $(".modal-content:first").css('animation-name', 'hide_modal');
	$("#id_modal").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 300);
}

function show_error(pesan) {
	$("#error_modal").find('b').html(pesan);
	$("#error_modal").show();
	$("#error_modal").css('animation-name', 'show_modal');

	$("#close_error_form").click(function(event) {
		// $("#error_modal").hide();
		$("#error_modal").css('animation-name', 'hide_modal');
		setTimeout(function function_name() {
			$("#error_modal").hide();
		}, 300);
	});

	window.onclick = function(event) {
		var modal = document.getElementById('error_modal');
		if(event.target == modal){
			$("#error_modal").css('animation-name', 'hide_modal');
			setTimeout(function function_name() {
				$("#error_modal").hide();
			}, 300);
		}
	};
}

//Validasi input kosong
$.fn.validateEmpty = function () {
	var form = this;

	form.on('submit', function (event) {
		event.preventDefault();
		var inputan = form.find("input,select");
		// console.log(inputan);
		var kosong = false;
		inputan.each(function(index, el) {
			if ($(el).val() == "") {
				kosong = true;
			}
		});

		if(kosong){
			show_error("Harap lengkapi data isian");
		}
		else{
			form.off('submit').trigger('submit');
		}
	});

function MyModal() {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
}