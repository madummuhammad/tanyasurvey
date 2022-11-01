	$("#hitung-pinjaman .dana_maksimal").on('click',function(){
		if ($("#hitung-pinjaman [name=dana_maksimal]").is(':checked')) {
			$(".jml_dana #rupiah").attr("disabled","disabled");
			$(".jml_dana #rupiah").val("");
		} else {
			$(".jml_dana #rupiah").removeAttr("disabled");
		}
	})

	$("#hitung-pinjaman #hitung").on('click',function(){
		var jml_dana=$("#hitung-pinjaman [name=jml_dana]").val();
		var dana_maksimal=$("#hitung-pinjaman [name=dana_maksimal]").val();
		var tenor=$("#hitung-pinjaman [name=tenor]").val();
		var kota=$("#hitung-pinjaman [name=kota]").val();
		var merek=$("#hitung-pinjaman [name=merek]").val();

		if ($("#hitung-pinjaman [name=dana_maksimal]").is(':checked')) {
			$("#hitung-pinjaman [name=dana_maksimal").attr("disabled");
			$("#hitung-pinjaman [name=dana_maksimal").val("");
			window.open("https://api.whatsapp.com/send?phone=6287792963030&text=Hallo%20Admin,%0ASaya%20mau%20tanya%20hitungan%20pinjaman:%0A*Dana Pinjaman*:Maksimal%0A*Tenor*:"+tenor+"%0A*Kota%2fKabupaten*:"+kota+"%0A*Merek,%20Tipe%20%26%20Tahun*:"+merek+"%0ATerimakasih", '_blank');
		} else {
			window.open("https://api.whatsapp.com/send?phone=6287792963030&text=Hallo%20Admin,%0ASaya%20mau%20tanya%20hitungan%20pinjaman:%0A*Dana Pinjaman*:"+jml_dana+"%0A*Tenor*:"+tenor+"%0A*Kota%2fKabupaten*:"+kota+"%0A*Merek,%20Tipe%20%26%20Tahun*:"+merek+"%0ATerimakasih", '_blank');
		}
	});

	var rupiah = document.getElementById('rupiah');
	rupiah.addEventListener('keyup', function(e){
		rupiah.value = formatRupiah(this.value, 'Rp. ');
	});

	function formatRupiah(angka, prefix){
		var number_string = angka.replace(/[^,\d]/g, '').toString(),
		split   		= number_string.split(','),
		sisa     		= split[0].length % 3,
		rupiah     		= split[0].substr(0, sisa),
		ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

		if(ribuan){
			separator = sisa ? '.' : '';
			rupiah += separator + ribuan.join('.');
		}

		rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
		return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
	}