#!/usr/bin/env node 

import inquirer from "inquirer";
class Student {
  static counter = 1000;
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.id = Student.counter++ + 1;
    this.name = name;
    this.courses = [];
    this.balance = 10000;
  }
  enroll_course(courses: string) {

    this.courses.push(courses);
  }

  view_balance() {
    console.log("\n_________________________________________________________")
    console.log(`  Balance for ${this.name} : Rs${this.balance}`);
    console.log("_________________________________________________________")
  }

  pay_fees(amount: number) {
    if(amount<this.balance){
    this.balance -= amount;
    console.log("\n_________________________________________________________")
    console.log(`${amount}Rs\nFees Paid Suceesfully for ${this.name}`);
    console.log(`Remaining Balance : ${this.balance}`);
    console.log("_________________________________________________________")
    }
    else{
        console.log("\n____________________________________")
        console.log("       Insufficient Balance")
        console.log("____________________________________")
    }

  }
  show_status() {
    console.log("\n_________________________________________________________")
    console.log(` ID      :   ${this.id}`);
    console.log(` Name    :   ${this.name}`);
    console.log(` Course  :   ${this.courses.join(" , ")}`);
    console.log(` Balance :   ${this.balance}Rs`);
    console.log("_________________________________________________________")
  }
}

class student_Manager {
  students: Student[];
  constructor() {
    this.students = [];
  }
  find_student(student_id: number) {
    return this.students.find((std) => std.id == student_id);
  }

  add_student(name: string) {
    let student = new Student(name);
    this.students.push(student);
    console.log("\n__________________________________________")
    console.log(
      `Student ID    : ${student.id}\nStudent Name  : ${name}\n \tAdded Successfully!!!!. `
    );
    console.log("___________________________________________")
  }

  enroll_student(student_id: number, course: string) {
    let student = this.find_student(student_id);
    if (student) {
      student.enroll_course(course);
      console.log("\n_________________________________________________________________")
      console.log(` ${student.name} enrolled in ${course} sucessfully`);
      console.log("_________________________________________________________________")
    }
  }

  view_student_balance(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.view_balance();
    } else {
        console.log("\n_________________________________________________________________")
      console.log("Student not Found !!!\nPlease Enter a Correct Student ID");
      console.log("_________________________________________________________________")
    }
  }

  pay_student_fees(student_id: number, amount: number) {
    let student = this.find_student(student_id);
    
    if (student) {
      student.pay_fees(amount);
    } else {
        console.log("\n_________________________________________________________________")
    
      console.log("Student not Found !!! \nPlease Enter a Correct Student ID");
      console.log("_________________________________________________________________")
    }
  }

  show_student_status(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.show_status();
    } else {
        console.log("\n_________________________________________________________________")
      console.log("Student not Found !!!\nPlease Enter a Correct Student ID");
      console.log("_________________________________________________________________")
    }
  }
}

//Main Function to run the program
async function main() {
    console.log("===================================================================================================")
    console.log("                                      Student Managment System")

    console.log("===================================================================================================\n\n")
  console.log("_".repeat(50));
  let studentManager = new student_Manager();
  while (true) {
    let choice = await inquirer.prompt({
      name: "choice",
      type: "list",
      message: "Select What you want to do",
      choices: [
        "Add a new Student",
        "Enroll a Student in Course",
        "View a Student balance",
        "Pay Student Fees",
        "Show Student Status",
        "Exit",
      ],
    });
    

    if (choice.choice == "Add a new Student") {
      let name_input = await inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "Enter a Student Name",
        },
      ]);
      studentManager.add_student(name_input.name);
    } else if (choice.choice == "Enroll a Student in Course") {
      let enroll_student = await inquirer.prompt([
        {
          name: "student_id",
          type: "number",
          message: "Enter a Student ID",
        },
        {
          name: "course",
          type: "input",
          message: "Enter a Course",
        },
      ]);
      studentManager.enroll_student(
        enroll_student.student_id,
        enroll_student.course
      );
    } else if (choice.choice == "View a Student balance") {
      let studentBalance = await inquirer.prompt([
        {
          name: "student_id",
          type: "number",
          message: "Enter a Student ID",
        },
      ]);
      studentManager.view_student_balance(studentBalance.student_id);
    } else if (choice.choice == "Pay Student Fees") {
      let studentFees = await inquirer.prompt([
        {
          name: "student_id",
          type: "number",
          message: "Enter a Student ID",
        },
        {
          name: "amount",
          type: "number",
          message: "Enter a Amount to pay",
        },
      ]);
      studentManager.pay_student_fees(
        studentFees.student_id,
        studentFees.amount
      );
    } else if (choice.choice == "Show Student Status") {
      let studentStatus = await inquirer.prompt([
        {
          name: "student_id",
          type: "number",
          message: "Enter a Student ID",
        },
      ]);
      studentManager.show_student_status(studentStatus.student_id);
    } else if (choice.choice == "Exit") {
        console.log("\n_________________________________________________________________")
      console.log("\t     Good Bye.....");
      console.log("_________________________________________________________________")
      process.exit();
    }
  }
}

main();
