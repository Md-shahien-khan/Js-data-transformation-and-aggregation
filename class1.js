// 2-1 Objects limitations and Map Introduction
const obj = {
    nextLevel : { courseID : "leve2"},
    "programing Hero" :  {courseID : "level3"}
}
// console.log(obj.nextLevel);
// console.log(obj["programing Hero"]);
// console.log(obj["nextLevel"]);


const obj2 = {};
obj2.nextLevel = { courseId : "Level2"};
obj2[true] = {courseID : "level1"};

// console.log(obj2);


const course1 = { name : "Programming Hero level 1"};
const course2 = { name : "Programming Hero level 2"};
const obj3 = {};
obj3[course1] = {course1 : "shawon"}

// console.log(obj3);

// JavaScript-এ Map একটি বিল্ট-ইন অবজেক্ট যা কী (key) এবং মান (value) জোড়া আকারে ডেটা সংরক্ষণ করতে ব্যবহৃত হয়। এটি অবজেক্টের মতো কাজ করে, তবে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

// নিম্নে বিস্তারিতভাবে ব্যাখ্যা করা হলো:

// কী-এর ধরন (Key Type):
// সাধারণ অবজেক্টে কী শুধুমাত্র string বা symbol হতে পারে, কিন্তু Map-এ যেকোনো ধরণের মান—যেমন object, function, বা primitive value—কী হিসেবে ব্যবহার করা যায়।

// অর্ডার রক্ষা (Order Preservation):
// Map-এ যেভাবে উপাদান যোগ করা হয়, সেই ক্রমানুসারে সেটি সংরক্ষিত থাকে। অর্থাৎ, insertion order বজায় থাকে।

// সাইজ নির্ধারণ (Size Property):
// Map-এর মধ্যে কতগুলো উপাদান আছে তা সহজেই map.size ব্যবহার করে জানা যায়।

// মেথডসমূহ:

// set(key, value) → নতুন কী-ভ্যালু জোড়া যোগ করতে ব্যবহৃত হয়।

// get(key) → নির্দিষ্ট কী-এর মান পাওয়া যায়।

// delete(key) → নির্দিষ্ট কী-ভ্যালু জোড়া মুছে ফেলা হয়।

// has(key) → নির্দিষ্ট কী আছে কিনা তা পরীক্ষা করে।

// clear() → পুরো Map খালি করে দেয়।

// উদাহরণ:

// let capitals = new Map();

// capitals.set("Bangladesh", "Dhaka");
// capitals.set("India", "New Delhi");
// capitals.set("Japan", "Tokyo");

// console.log(capitals.get("Bangladesh")); // Dhaka
// console.log(capitals.size); // 3
// console.log(capitals.has("India")); // true


// সারসংক্ষেপে, JavaScript-এর Map এমন একটি ডেটা স্ট্রাকচার যা ডাইনামিক ও ক্রমানুসারে কী-ভ্যালু জোড়া সংরক্ষণের জন্য অত্যন্ত কার্যকর।

// Map
const course3 = { name : "DBA"};
const course4 = { name : "Msc"};

const map = new Map();
// map.set(1, "programing hero");
// map.set(false, "programing hero");
// map.set(false, "programing hero");   //we can put object

map.set(course3, {courseId : "reserach"});
map.set(course4, {courseId : "Masters"});


// console.log(map) //Map(2) {
//   { name: 'DBA' } => { courseId: 'reserach' },
//   { name: 'Msc' } => { courseId: 'Masters' }
// } it will show like that on the left they kept the object and on the right the value.


const firstCountry = {name : "Bangladesh"};
const secondCountry = {name : "Malaysia"};
const thirdCountry = {name : "United Kingdom"};

const map4 = new Map();

map4.set(firstCountry, { reason : "birth place"});
map4.set(secondCountry, { reason: "travel" });
map4.set(thirdCountry, { reason: "study" });

// map4.clear();
// map4.delete(secondCountry);
// map4.has(thirdCountry);
// console.log(map4.size);
// console.log(map4)


// forEach on map
// map4.forEach((value, key)=>{
//     console.log("key :", key, "value :", value);
// })


// if u want to add the key name
// map4.forEach((value, key) => (
    // key.name = "My country " + key.name
// ));

// console.log(map4.keys()); will give us [Map Iterator] { { name: 'Bangladesh' } }
// and if u want array of object
// console.log([...map4.keys()]); will return [ { name: 'Bangladesh' } ]
// console.log([...map4.values()]);[ { reason: 'birth place' } ]

// u can use for of method 
// for(let key of map4.keys()){
//     key.name = "My favourite country " + key.name
// }
// console.log(map4);



// entries
// console.log(map4.entries());//[Map Entries] {
//   [ { name: 'Bangladesh' }, { reason: 'birth place' } ],
//   [ { name: 'Malaysia' }, { reason: 'travel' } ],
//   [ { name: 'United Kingdom' }, { reason: 'study' } ]
// }. will show like this





const courseName = [
    ["programming hero", "Level1"],
    ["Next Level", "level2"],
];

const map6 = new Map(courseName);
// console.log(map6)Map(2) { 'programming hero' => 'Level1', 'Next Level' => 'level2' } output