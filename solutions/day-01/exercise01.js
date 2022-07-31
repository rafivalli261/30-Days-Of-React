/*
1. Declare an empty array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called mixedDataTypes, put different data types in the array and find  the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google,  Microsoft, Apple, IBM, Oracle and Amazon
8. Print the array using console.log()
9. Print the number of companies in the array
10. Print the first company, middle and last company
11. Print out each company
12. Change each company name to uppercase one by one and print them out
13. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
15. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
16. Filter out companies which have more than one 'o' without the filter method
17. Sort the array using sort() method
18. Reverse the array using reverse() method
19. Slice out the first 3 companies from the array
20. Slice out the last 3 companies from the array
21. Slice out the middle IT company or companies from the array
22. Remove the first IT company from the array
23. Remove the middle IT company or companies from the array
24. Remove the last IT company from the array
25. Remove all IT companies
*/
const arr = []; // -> 1.
const arr2 = [1, 2, 3, 4, 5]; // 2
arr2.length; // 3
const [a, , b, , c] = arr2; // 4
const mixedDataTypes = [1, `e`, "halo", 2.34, true, null, undefined]; // 5
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]; // 6
console.log(itCompanies); // 7
console.log(itCompanies.length); // 8
console.log(itCompanies[0], itCompanies[Math.round(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]); // 9
itCompanies.forEach((company) => console.log(company));
itCompanies.forEach((company) => console.log(company.toUpperCase()));
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are big IT companies.`);
console.log(itCompanies.includes("Google") ? "Google" : `Google is not found`);
const palingBanyakO = (arr) => {
	let arrHitung = [];
	let temp = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] == "o" || arr[i][j] == "O") {
				temp += 1;
			}
		}
		arrHitung.push(temp);
		temp = 0;
	}
	console.log(arrHitung);
	let index = 0;
	for (let i = 0; i < arrHitung.length - 1; i++) {
		if (arrHitung[i] > arrHitung[i + 1]) {
			index = arrHitung.indexOf(arrHitung[i]);
		}
	}
	return arr[index];
};
console.log(palingBanyakO(itCompanies));
// memiliki o lebih dari 1
const oLebih = (arr) => {
	let temp = 0;
	let arrHitung = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] == "o" || arr[i][j] == "O") {
				temp += 1;
			}
		}
		if (temp > 1) arrHitung.push(arr[i]);
		temp = 0;
	}
	return [...arrHitung];
};
console.log(oLebih(itCompanies));
const itCompaniesSorted = itCompanies.sort();
const itCompaniesSortedReserved = itCompaniesSorted.reverse();

console.log("The Slice");

// 19. Slice out the first 3 companies from the array
const slicedCompanyStart = itCompanies.slice(0, 4);
console.log(slicedCompanyStart);
// 20. Slice out the last 3 companies from the array
const slicedCompanyEnd = itCompanies.slice(itCompanies.length - 4, 4);
console.log(slicedCompanyEnd);
// 21. Slice out the middle IT company or companies from the array
const slicedCompanyMiddle = itCompanies.slice(Math.round(itCompanies.length / 2), 1);
console.log(slicedCompanyMiddle);

console.log("The Remove");
console.log(`Initial array is ${itCompanies}`);
// 22. Remove the first IT company from the array
const removeAtFirstCompany = [...itCompanies];
removeAtFirstCompany.shift();
console.log(removeAtFirstCompany);
// 23. Remove the middle IT company or companies from the array
const removeAtMiddleCompany = [...itCompanies];
removeAtMiddleCompany.splice(Math.floor(removeAtMiddleCompany.length / 2), 1);
console.log(removeAtMiddleCompany);
// 24. Remove the last IT company from the array
const removeAtLastCompany = [...itCompanies];
removeAtLastCompany.pop();
console.log(removeAtLastCompany);
// 25. Remove all IT companies
const removeAllCompany = [...itCompanies];
removeAllCompany.splice(0, removeAllCompany.length);
console.log(removeAllCompany);
console.log(`Initial array is ${itCompanies}`);
