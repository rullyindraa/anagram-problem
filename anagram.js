function checkanagram (s1, s2) {
    //spasi atau symbol diabaikan
    s1 = s1.replace(/\s/g,'');
    s2 = s2.replace(/\s/g,'');
    
    //untuk mengabaikan char /\D/g  
  
    //mengabaikan angka
    s1 = s1.replace(/[0-9]/g,'');
    s2 = s2.replace(/[0-9]/g,'');
    
    //case insensitif
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    
    var y = s1.split("").sort().join(""),
        z = s2.split("").sort().join("");
    console.log(z === y
        ? s1 + " dan " + s2 + " adalah anagram."
        : s1 + " dan " + s2 + " bukan anagram."
    );
}

checkanagram("siang2","sai ng");
