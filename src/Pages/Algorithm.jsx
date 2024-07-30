import React, { useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const Algorithm = () => {
  const financeData = [
    {
      username: "Ram",
      income: 50000,
      expense: {
        total: 10000,
        food : 2000,
        education: 5000
      }
    },
    {
      username: "Hari",
      income: 40000,
      expense: {
        total: 20000,
        food: 1000,
        education: 8000
      }
    },
  ];
  

  

  const value = financeData.map((val) => {
    return <ShowData income={val.income} expense={val.expense.total} />;
  });
  return (
    
    <div className="text-white">
      <button className="bg-green-500 w-[130px] rounded-md font-medium mx-auto my-3 py-2 ">
      <Link to="/calculator"> Calculator</Link>
      </button>
      <h1 className="text-2xl font-bold mb-4">The 50/30/20 algorithm</h1>
      {financeData.map((val) => {
        
        return <ShowData user={val.username} income={val.income} expense={val.expense} />;
      })}
    </div>
  );
};

function ShowData({user, income, expense }) {
  const need = 0.5 * income;
  const want = 0.3 * income;
  const saving = 0.2 * income;
  return (
    <>
      <div className="text-white mt-10">
        <h1 className="text-4xl py-5">User: {user}</h1>
        <p>income: {income} </p>
        <p>expense: {expense.total} </p>
        <ul>
        <li>Food:{expense.food} </li>
        <li>Education: {expense.education}</li>
        </ul>
        <p>Expected need expenditure : {need} </p>
        <p>Expected want expenditure : {want} </p>
        <p>Expected saving : {saving} </p>
        <br />
      </div>
      <div className="w-full h-64">
        <Bar
          data={{
            labels: ["income", "expense"],
            datasets: [
              {
                label: "finance",
                data: [income, expense.total],
                backgroundColor: ["#4CAF50", "#FF6384"],
              },
            ],
          }}
        />
      </div>
      <div className="w-full h-64 mb-10 mt-10">
        <h1>Using 50/30/20 rule</h1>
        <Doughnut
          data={{
            labels: ["Need", "Want", "saving"],
            datasets: [
              {
                label: "finance",
                data: [need, want, saving],
              },
            ],
          }}
        />
        <br />
      </div>
    </>
  );
}

export default Algorithm;
