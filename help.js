
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`

Top Up Murah Dan Aman Cuma Di Pusat Top Up , Link Grup : https://chat.whatsapp.com/E9jvSwERcXA3pLKK11mCFG

 *USER INFO*
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 *BOT INFO*
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 Total Fitur : 1+

 *MAIN MENU*
 ${no++} ➳ ${prefix}menu
 ${no++} ➳ ${prefix}rules
 ${no++} ➳ ${prefix}owner
 ${no++} ➳ ${prefix}infobot
 ${no++} ➳ ${prefix}donasi
 ${no++} ➳ ${prefix}donate
 ${no++} ➳ ${prefix}sewabot
 ${no++} ➳ ${prefix}groupbot
 ${no++} ➳ ${prefix}ownerinfo
 ${no++} ➳ ${prefix}infoowner

 *USER MENU*
 ${no++} ➳ ${prefix}verify
 ${no++} ➳ ${prefix}report
 ${no++} ➳ ${prefix}request
 ${no++} ➳ ${prefix}transfer
 ${no++} ➳ ${prefix}menfess
 ${no++} ➳ ${prefix}buatroom
 ${no++} ➳ ${prefix}secretchat
 ${no++} ➳ ${prefix}cekprem
 ${no++} ➳ ${prefix}daftarprem
 ${no++} ➳ ${prefix}changename

 *OWNER MENU*
 ${no++} ➳ ${prefix}error
 ${no++} ➳ ${prefix}clearerr
 ${no++} ➳ ${prefix}siaran
 ${no++} ➳ ${prefix}session
 ${no++} ➳ ${prefix}resetdb
 ${no++} ➳ ${prefix}runtime
 ${no++} ➳ ${prefix}setexif
 ${no++} ➳ ${prefix}setwm
 ${no++} ➳ ${prefix}setfooter
 ${no++} ➳ ${prefix}setppbot
 ${no++} ➳ ${prefix}addprem
 ${no++} ➳ ${prefix}delprem
 ${no++} ➳ ${prefix}bc
 ${no++} ➳ ${prefix}bctext
 ${no++} ➳ ${prefix}bcvideo
 ${no++} ➳ ${prefix}bcaudio
 ${no++} ➳ ${prefix}bcimage
 ${no++} ➳ ${prefix}broadcast

 *STORE MENU*
 ${no++} ➳ ${prefix}kali 1 2
 ${no++} ➳ ${prefix}bagi 1 2
 ${no++} ➳ ${prefix}kurang 1 2
 ${no++} ➳ ${prefix}tambah 1 2
 ${no++} ➳ ${prefix}dellist key
 ${no++} ➳ ${prefix}addlist key@response
 ${no++} ➳ ${prefix}update key@response
 ${no++} ➳ ${prefix}done <reply orderan>
 ${no++} ➳ ${prefix}proses <reply orderan>
 ${no++} ➳ ${prefix}list <only group>
 ${no++} ➳ ${prefix}shop <only group>
 
 *GROUP MENU*
 ${no++} ➳ ${prefix}fitnah
 ${no++} ➳ ${prefix}delete
 ${no++} ➳ ${prefix}revoke
 ${no++} ➳ ${prefix}tagall
 ${no++} ➳ ${prefix}hidetag
 ${no++} ➳ ${prefix}setdesc
 ${no++} ➳ ${prefix}linkgrup
 ${no++} ➳ ${prefix}infogroup
 ${no++} ➳ ${prefix}setppgrup
 ${no++} ➳ ${prefix}setnamegrup
 ${no++} ➳ ${prefix}group open
 ${no++} ➳ ${prefix}group close
 ${no++} ➳ ${prefix}antilink on
 ${no++} ➳ ${prefix}antilink off
 ${no++} ➳ ${prefix}welcome on
 ${no++} ➳ ${prefix}welcome off
 ${no++} ➳ ${prefix}tiktokauto on
 ${no++} ➳ ${prefix}tiktokauto off
 ${no++} ➳ ${prefix}kick @tag
 ${no++} ➳ ${prefix}demote @tag
 ${no++} ➳ ${prefix}promote @tag
 
 *AUTODECT MENU* 
 ${no++} ➳ ${prefix}sadcat
 ${no++} ➳ ${prefix}translate
 ${no++} ➳ ${prefix}stalkff
 ${no++} ➳ ${prefix}stalknpm
 ${no++} ➳ ${prefix}stalkgithub
 ${no++} ➳ ${prefix}balikhuruf
 ${no++} ➳ ${prefix}balikangka
 ${no++} ➳ ${prefix}besarkecil
 ${no++} ➳ ${prefix}bilangangka

 *DOWNLOAD MENU*
 ${no++} ➳ ${prefix}tiktok
 ${no++} ➳ ${prefix}ytmp3
 ${no++} ➳ ${prefix}ytmp4
 ${no++} ➳ ${prefix}pinterest
 ${no++} ➳ ${prefix}playmp3
 ${no++} ➳ ${prefix}playmp4
 ${no++} ➳ ${prefix}gitclone
 ${no++} ➳ ${prefix}mediafire
 ${no++} ➳ ${prefix}wikimedia
 ${no++} ➳ ${prefix}soundcloud
 ${no++} ➳ ${prefix}infogempa

 *CONVERT MENU* 
 ${no++} ➳ ${prefix}tts
 ${no++} ➳ ${prefix}ttp
 ${no++} ➳ ${prefix}ttp2
 ${no++} ➳ ${prefix}attp
 ${no++} ➳ ${prefix}attp2
 ${no++} ➳ ${prefix}tourl
 ${no++} ➳ ${prefix}upload
 ${no++} ➳ ${prefix}toimg
 ${no++} ➳ ${prefix}toimage
 ${no++} ➳ ${prefix}tomp3
 ${no++} ➳ ${prefix}toaudio
 ${no++} ➳ ${prefix}tomp4
 ${no++} ➳ ${prefix}tovideo
 ${no++} ➳ ${prefix}emojimix
 ${no++} ➳ ${prefix}emojmix
 ${no++} ➳ ${prefix}emojinua
 ${no++} ➳ ${prefix}mixemoji
 ${no++} ➳ ${prefix}stiker
 ${no++} ➳ ${prefix}sticker
 ${no++} ➳ ${prefix}sgif
 ${no++} ➳ ${prefix}stikergif
 ${no++} ➳ ${prefix}stickergif
 ${no++} ➳ ${prefix}swm
 ${no++} ➳ ${prefix}stikerwm
 ${no++} ➳ ${prefix}stickerwm
 ${no++} ➳ ${prefix}smeme
 ${no++} ➳ ${prefix}memestiker
 ${no++} ➳ ${prefix}stikermeme
 ${no++} ➳ ${prefix}stickermeme
 ${no++} ➳ ${prefix}takesticker
 ${no++} ➳ ${prefix}emojinua2
 ${no++} ➳ ${prefix}mixemoji2
 ${no++} ➳ ${prefix}emojmix2
 ${no++} ➳ ${prefix}emojimix2

 *TOOLS MENU* 
 ${no++} ➳ ${prefix}spamcall
 ${no++} ➳ ${prefix}translate
 ${no++} ➳ ${prefix}ssweb-pc
 ${no++} ➳ ${prefix}ssweb-hp
 ${no++} ➳ ${prefix}bitly_short
 ${no++} ➳ ${prefix}cuttly_short
 ${no++} ➳ ${prefix}tinyurl_short
 ${no++} ➳ ${prefix}base32
 ${no++} ➳ ${prefix}base64
 ${no++} ➳ ${prefix}debase32
 ${no++} ➳ ${prefix}debase64
 
 *MAKER MENU* 
 ${no++} ➳ ${prefix}joker
 ${no++} ➳ ${prefix}digital
 ${no++} ➳ ${prefix}nulis
 ${no++} ➳ ${prefix}nulis2
 ${no++} ➳ ${prefix}quoteser
 ${no++} ➳ ${prefix}quobucin
 ${no++} ➳ ${prefix}rem
 ${no++} ➳ ${prefix}girlneko
 ${no++} ➳ ${prefix}sadboy
 ${no++} ➳ ${prefix}kaneki
 ${no++} ➳ ${prefix}lolimaker

 *ANONYMOUS MENU*
 ${no++} ➳ ${prefix}buatroom 628xxx
 ${no++} ➳ ${prefix}room <only owner>
 ${no++} ➳ ${prefix}stopchat <only room>
 ${no++} ➳ ${prefix}menfess 628xx|bot|hai

 *PRIMBON MENU*
 ${no++} ➳ ${prefix}ramaljodoh
 ${no++} ➳ ${prefix}ramalanjodoh
 ${no++} ➳ ${prefix}nomorhoki
 ${no++} ➳ ${prefix}artimimpi
 ${no++} ➳ ${prefix}artinama
 ${no++} ➳ ${prefix}sifatusaha
 ${no++} ➳ ${prefix}tafsirmimpi
 ${no++} ➳ ${prefix}pasangan
 ${no++} ➳ ${prefix}suamiistri
 ${no++} ➳ ${prefix}ramalcinta
 ${no++} ➳ ${prefix}ramalancinta
 ${no++} ➳ ${prefix}ramaljodohbali
 ${no++} ➳ ${prefix}ramalanjodohbali
 ${no++} ➳ ${prefix}cocoknama
 ${no++} ➳ ${prefix}kecocokannama
 ${no++} ➳ ${prefix}cocokpasangan
 ${no++} ➳ ${prefix}kecocokanpasangan

 *AUDIO CHANGE*
 ${no++} ➳ ${prefix}fat
 ${no++} ➳ ${prefix}fast
 ${no++} ➳ ${prefix}slow
 ${no++} ➳ ${prefix}bass
 ${no++} ➳ ${prefix}deep
 ${no++} ➳ ${prefix}tupai
 ${no++} ➳ ${prefix}robot
 ${no++} ➳ ${prefix}blown
 ${no++} ➳ ${prefix}smooth
 ${no++} ➳ ${prefix}earrape
 ${no++} ➳ ${prefix}reverse
 ${no++} ➳ ${prefix}nightcore

 *AUDIO MENU* 
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}
 ${no++} ➳ ${prefix}audio${ad++}

 *CERPEN MENU* 
 ${no++} ➳ ${prefix}cerpen-sejarah
 ${no++} ➳ ${prefix}cerpen-sedih
 ${no++} ➳ ${prefix}cerpen-sastra
 ${no++} ➳ ${prefix}cerpen-romantis
 ${no++} ➳ ${prefix}cerpen-rohani
 ${no++} ➳ ${prefix}cerpen-rindu
 ${no++} ➳ ${prefix}cerpen-remaja
 ${no++} ➳ ${prefix}cerpen-ramadhan
 ${no++} ➳ ${prefix}cerpen-petualangan
 ${no++} ➳ ${prefix}cerpen-persahabatan
 ${no++} ➳ ${prefix}cerpen-perpisahan
 ${no++} ➳ ${prefix}cerpen-perjuangan
 ${no++} ➳ ${prefix}cerpen-penyesalan
 ${no++} ➳ ${prefix}cerpen-pengorbanan
 ${no++} ➳ ${prefix}cerpen-pengalaman
 ${no++} ➳ ${prefix}cerpen-pendidikan
 ${no++} ➳ ${prefix}cerpen-penantian
 ${no++} ➳ ${prefix}cerpen-patahhati
 ${no++} ➳ ${prefix}cerpen-olahraga
 ${no++} ➳ ${prefix}cerpen-nasionalisme
 ${no++} ➳ ${prefix}cerpen-nasihat
 ${no++} ➳ ${prefix}cerpen-motivasi
 ${no++} ➳ ${prefix}cerpen-misteri
 ${no++} ➳ ${prefix}cerpen-mengharukan
 ${no++} ➳ ${prefix}cerpen-malaysia
 ${no++} ➳ ${prefix}cerpen-liburan
 ${no++} ➳ ${prefix}cerpen-kristen
 ${no++} ➳ ${prefix}cerpen-korea
 ${no++} ➳ ${prefix}cerpen-kisahnyata
 ${no++} ➳ ${prefix}cerpen-keluarga
 ${no++} ➳ ${prefix}cerpen-kehidupan
 ${no++} ➳ ${prefix}cerpen-jepang
 ${no++} ➳ ${prefix}cerpen-inspiratif
 ${no++} ➳ ${prefix}cerpen-gokil
 ${no++} ➳ ${prefix}cerpen-galau
 ${no++} ➳ ${prefix}cerpen-cintasejati
 ${no++} ➳ ${prefix}cerpen-cintasegitiga
 ${no++} ➳ ${prefix}cerpen-cintasedih
 ${no++} ➳ ${prefix}cerpen-cintaromantis
 ${no++} ➳ ${prefix}cerpen-cintapertama
 ${no++} ➳ ${prefix}cerpen-cintaislami
 ${no++} ➳ ${prefix}cerpen-cinta
 ${no++} ➳ ${prefix}cerpen-budaya
 ${no++} ➳ ${prefix}cerpen-bahasasunda
 ${no++} ➳ ${prefix}cerpen-bahasajawa
 ${no++} ➳ ${prefix}cerpen-bahasainggris
 ${no++} ➳ ${prefix}cerpen-bahasadaerah
 ${no++} ➳ ${prefix}cerpen-anak

 *SOUND MENU*
 ${no++} ➳ ${prefix}sound1
 ${no++} ➳ ${prefix}sound2
 ${no++} ➳ ${prefix}sound3
 ${no++} ➳ ${prefix}sound4
 ${no++} ➳ ${prefix}sound5
 ${no++} ➳ ${prefix}sound6
 ${no++} ➳ ${prefix}sound7
 ${no++} ➳ ${prefix}sound8
 ${no++} ➳ ${prefix}sound9
 ${no++} ➳ ${prefix}sound10
 ${no++} ➳ ${prefix}sound11
 ${no++} ➳ ${prefix}sound12
 ${no++} ➳ ${prefix}sound13
 ${no++} ➳ ${prefix}sound14
 ${no++} ➳ ${prefix}sound15
 ${no++} ➳ ${prefix}sound16
 ${no++} ➳ ${prefix}sound17
 ${no++} ➳ ${prefix}sound18
 ${no++} ➳ ${prefix}sound19
 ${no++} ➳ ${prefix}sound20
 ${no++} ➳ ${prefix}sound21
 ${no++} ➳ ${prefix}sound22
 ${no++} ➳ ${prefix}sound23
 ${no++} ➳ ${prefix}sound24
 ${no++} ➳ ${prefix}sound25
 ${no++} ➳ ${prefix}sound26
 ${no++} ➳ ${prefix}sound27
 ${no++} ➳ ${prefix}sound28
 ${no++} ➳ ${prefix}sound29
 ${no++} ➳ ${prefix}sound30
 ${no++} ➳ ${prefix}sound31
 ${no++} ➳ ${prefix}sound32
 ${no++} ➳ ${prefix}sound33
 ${no++} ➳ ${prefix}sound34
 ${no++} ➳ ${prefix}sound35
 ${no++} ➳ ${prefix}sound36
 ${no++} ➳ ${prefix}sound37
 ${no++} ➳ ${prefix}sound38
 ${no++} ➳ ${prefix}sound39
 ${no++} ➳ ${prefix}sound40
 ${no++} ➳ ${prefix}sound41
 ${no++} ➳ ${prefix}sound42
 ${no++} ➳ ${prefix}sound43
 ${no++} ➳ ${prefix}sound44
 ${no++} ➳ ${prefix}sound45
 ${no++} ➳ ${prefix}sound46
 ${no++} ➳ ${prefix}sound47
 ${no++} ➳ ${prefix}sound48
 ${no++} ➳ ${prefix}sound49
 ${no++} ➳ ${prefix}sound50
 ${no++} ➳ ${prefix}sound51
 ${no++} ➳ ${prefix}sound52
 ${no++} ➳ ${prefix}sound53
 ${no++} ➳ ${prefix}sound54
 ${no++} ➳ ${prefix}sound55
 ${no++} ➳ ${prefix}sound56
 ${no++} ➳ ${prefix}sound57
 ${no++} ➳ ${prefix}sound58
 ${no++} ➳ ${prefix}sound59
 ${no++} ➳ ${prefix}sound60
 ${no++} ➳ ${prefix}sound61
 ${no++} ➳ ${prefix}sound62
 ${no++} ➳ ${prefix}sound63
 ${no++} ➳ ${prefix}sound64
 ${no++} ➳ ${prefix}sound65
 ${no++} ➳ ${prefix}sound66
 ${no++} ➳ ${prefix}sound67
 ${no++} ➳ ${prefix}sound68
 ${no++} ➳ ${prefix}sound69
 ${no++} ➳ ${prefix}sound70
 ${no++} ➳ ${prefix}sound71
 ${no++} ➳ ${prefix}sound72
 ${no++} ➳ ${prefix}sound73
 ${no++} ➳ ${prefix}sound74
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Kesalahan ID Pembeli
Admin Tidak Bertanggung Jawab Atas Kesalahan ID
2.Telpon Bot
Bot Akan Secara Otomatis Blocked
3.Curi Bot
Bot Akan Secara Otomatis Banned User`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Gopay*
Number: 0814-1414-2726
A/N: BOT_EiD

*Payment Dana*
Number: 0814-1414-2726
A/N: BOT_EiD

*Payment ShopeePay*
Number: 0814-1414-2726
A/N: BOT_EiD

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

*Data Profil*
 *• Nama:* Aril
 *• Umur:* 20
 *• Hoby:* Edit
 *• Askot:* Jakarta
 *• Konten*: -

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 0814-1414-2726
 • *Instagram:* @EnjoyCreamID
 `
}