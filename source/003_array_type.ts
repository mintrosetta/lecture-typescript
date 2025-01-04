const skills: string[] = ["Javascript"];

// array properties

// ดูจำนวนข้อมูลที่จัดเก็บอยู่ใน array
console.log(skills.length);

// array functions

// เพิ่มข้อมูลลงไปใน array
skills.push("C#");

// วนซ้ำค่าใน array โดยจะมี parameter ดังนี้ (ค่าที่ได้รับจากการวนซ้ำในรอบปัจจุบัน, ตำแหน่งของข้อมูลใน array, ก้อนข้อมูลของ array ปัจจุบัน)
skills.forEach((val: string, index: number, currentArr: string[]): void => {});

// วนซ้ำค่าใน array และทำการ return array ใหม่ออกมา
const mapArr: string[] = skills.map((val: string, index: number, currentArr: string[]): string => {
    return val;
});

// วนซ้ำค่าใน array และ return array ใหม่เฉพาะข้อมูลที่ผ่านเงื่อนไข
const filterArr: string[] = skills.filter((val: string, index: number, currentArr: string[]): boolean => {
    return index % 2 == 0;
});

// วนซ้ำค่าใน array โดยจะสามารถเข้าถึงข้อมูลที่ได้จากการวนซ้ำรอบก่อนหน้าได้ และจะส่งคืนเป็นค่าเดียว มักใช้ในการหาผลรวมค่าใน array
const reduceArr: string = skills.reduce((previosVal: string, currentVal: string, currentIndex: number, currentArr: string[]): string => {
    return `${previosVal}${currentVal}`;
});



console.log(skills);