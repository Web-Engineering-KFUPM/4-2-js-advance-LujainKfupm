/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");
// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
const Student = {
    firstName: "Lujain",
    lastName: "Aljehani",
    _gpa: 3.2,
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    get gpa(){
        return this._gpa;
    },
    set gpa(value){
        if (value >= 0 && value <= 4){
            this._gpa = value;
        }
    },
    updateGpa(newGpa) {
        this.gpa = newGpa;
    }
};
console.log("TODO1");
console.log("name:", Student.fullName);
console.log("GPA:", Student.gpa);
Student.updateGpa(3.85);
console.log("GPA after:", Student.gpa);


// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
console.log("TODO2");
const courses = { COE301: "Computer Organization", ICS104: "Introduction to Programming", SWE206: "Software Engineering", MATH201: "Calculus 3" };
for (const code in courses) {
    console.log(`${code} → ${courses[code]}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
console.log("TODO3");
const phrase = "JavaScript";
console.log(`string: "${phrase}"`);
console.log("length:", phrase.length);
console.log("first char:", phrase.charAt(0));


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
console.log("TODO4");
const date = new Date();
console.log(`day: ${date.getDate()}, month: ${date.getMonth()}, year: ${date.getFullYear()}`);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
console.log("TODO5");
const nums = [7, 12, -3, 45, 0, 18, 29, 4, 6, -10];
const min = Math.min(...nums);
const max = Math.max(...nums);
console.log("numbers:", nums);
console.log("min:", min, "max:", max);


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
console.log("TODO6");
function maxFunc(arr) {
    if (!Array.isArray(arr) || arr.length === 0){
        throw new Error("Array must be not empty");
    }
    return Math.max(...arr);
}

try {
    console.log("max of nums:", maxFunc(nums));
    console.log("empty array:");
    console.log(maxFunc([]));
} catch (e) {
    console.log("error:", e.message);
} finally {
    console.log("finally block");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
console.log("TODO7");
const words = ["ban", "babble", "make", "flab"];
const re = /ab/;
const matches = [];

words.forEach((w) => {
    if (re.test(w)) {
        console.log(`${w} matches!`);
        matches.push(w);
    }
});

console.log("words that matched:", matches);
