exports.wait = () => {
	return`*[❗] Wait A Minute*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 PENDAFTARAN 」*\n\n*Cara daftar ${prefix}daftar nama|umur* \n*contoh :* \n*${prefix}daftar YuukiDes|15*`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database Bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「 GROUP ONLY 」*`
}

exports.ownerb = () => {
	return`*LU OWNER??*`
}

exports.ownerg = () => {
	return`*LU OWNER??*`
}

exports.admin = () => {
	return`*LU ADMIN??*`
}

exports.badmin = () => {
	return`*GUA BUKAN ADMIN SAYANG*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner bot, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 PENDAFTARAN BERHASIL 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ada kode reffreal:v\nSebelom menggunakan bot silahkan ketik #rules`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
 ❒ Nama : ${pushname}
 ❒ Nomer : ${sender.split("@")[0]}
 ❒ Xp : ${getLevelingXp(sender)}
 ❒ Limit :  +3
 ❒ Pangkat :  ${role}
 ❒ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/994407339135\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return` * ❏「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
