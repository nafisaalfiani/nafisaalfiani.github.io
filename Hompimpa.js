function getOptionComputer(){
    const comp = Math.random();
    if( comp < 0.34 ) return 'batu';
    if( comp >= 0.34 && comp < 0.67 ) return 'gunting';
    return 'kertas';
}

function getHasil(comp, p){
    if( p == comp ) return 'SERI!';
    if( p == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
    if( p == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
    if( p == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH!' : 'MENANG!';
}

let ComputerScore = 0;
let playerSkor = 0;
function infoSkor(hasil){
    if( hasil == 'MENANG!') return playerSkor += 1;
    if( hasil == 'KALAH!') return ComputerScore += 1;
    if( hasil == 'SERI!') return playerSkor, ComputerScore;
}

function putar(){
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['batu', 'kertas', 'gunting'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if( new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length){
            i = 0;
        }
    }, 100)
}

const areaPlayer = document.querySelectorAll('li img');
areaPlayer.forEach(function(pOptions){
    pOptions.addEventListener("click", function(){
        const pilComp = getOptionComputer();
        const pilPlayer = pOptions.className;
        const hasil = getHasil(pilComp, pilPlayer);
        
        putar();
        infoSkor(hasil);

        setTimeout(function(){
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', `img/${pilComp}.png`);

            const infoHasil = document.querySelector('.info');
            infoHasil.innerHTML = hasil;

            const skorKomputer = document.querySelector('.skor-komputer');
            skorKomputer.innerHTML = 'SKOR : ' + ComputerScore;
            
            const skorPlayer = document.querySelector('.skor-player');
            skorPlayer.innerHTML = 'SKOR : ' + playerSkor;
        }, 1000);
    });
});