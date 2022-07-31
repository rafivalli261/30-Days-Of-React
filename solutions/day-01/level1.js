// membuat program show password sederhana
const hurufKecil = `qwertyuiopasdfghjklzxcvbnm`;
const hurufBesar = hurufKecil.toUpperCase();
const angka = `1234567890`;
const karakter = `\`~!@#$%^&*()_+-=,./;'[]\\<>?:"{}|`;

const arrHurufKecil = hurufKecil.slice(``);
const arrHurufBesar = hurufBesar.slice(``);
const arrangka = angka.slice(``);
const arrkarakter = karakter.slice(``);

const passwordGenerator = () => {
	let password = ``;
	for (let i = 0; i < 12; i++) {
		let count = Math.floor(Math.random() * 100);
		if (i >= 0 && i <= 2) {
			password += arrHurufBesar[count % arrHurufBesar.length];
		} else if (i >= 3 && i <= 5) {
			password += arrHurufKecil[count % arrHurufKecil.length];
		} else if (i >= 6 && i <= 8) {
			password += arrangka[count % arrangka.length];
		} else {
			password += arrkarakter[count % arrkarakter.length];
		}
	}
	return password;
};

function edit() {
	document.getElementById("act").innerHTML = passwordGenerator();
}

console.log(passwordGenerator());
