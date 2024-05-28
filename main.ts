#!/usr/bin/env node 
import Student from "./student.js";
import inquirer from "inquirer";
import student_Manager from "./student_Manager.js";




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
