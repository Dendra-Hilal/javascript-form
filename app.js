function submitData() {
    var namaMahasiswa = (document.fform.inputNama.value);
        document.fform.outputNama.value = namaMahasiswa;
    var nim = (document.fform.inputNim.value);
        document.fform.outputNim.value = nim;
    var gender = (document.fform.inputGender.value);
        document.fform.outputGender.value = gender;
    var agama = (document.fform.inputAgama.value);
        document.fform.outputAgama.value = agama;
    var prodi = (document.fform.inputProdi.value);
        document.fform.outputProdi.value = prodi;
    var pesan = (document.fform.inputPesan.value);
        document.fform.outputPesan.value = pesan;
    
    if (document.fform.inputStatus.checked == true) {
        document.fform.outputStatus.value = "Sudah Menikah"
    } else {
        document.fform.outputStatus.value = "Belum Menikah"
    }
}