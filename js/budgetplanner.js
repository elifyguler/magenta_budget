function calculateBudget(){
    let monthly_income = parseInt(document.getElementById('monthly_income').value);
    let housing = parseInt(document.getElementById('housing').value);
    let insurance = parseInt(document.getElementById('insurance').value);
    let grociers = parseInt(document.getElementById('grociers').value);
    let entertainment = parseInt(document.getElementById('entertainment').value);
    let debt = parseInt(document.getElementById('debt').value);
    let other_essentials = parseInt(document.getElementById('other_essentials').value);
    let lifestyle = parseInt(document.getElementById('lifestyle').value);
    let savings = parseInt(document.getElementById('savings').value);

    let total_expenses = housing+insurance+grociers+entertainment+debt+other_essentials+lifestyle+savings;

    alert(total_expenses);

    if(monthly_income=="")
    {
        alert("You have to enter your monthly income. Please enter it.")
    }
    else if(housing=="" ){
        alert("You have to enter your housing expense. Please enter it.")
    }
    else if(grociers==""){
        alert("You have to enter your grociers expense. Please enter it.")
    }
    else{
        housing1=housing*100/monthly_income;
        insurance1=insurance*100/monthly_income;
        grociers1=grociers*100/monthly_income;
        entertainment1=entertainment*100/monthly_income;
        debt1=debt*100/monthly_income;
        other_essentials1=other_essentials*100/monthly_income;
        lifestyle1=lifestyle*100/monthly_income;
        savings1=savings*100/monthly_income;


        if(monthly_income>total_expenses)
        {
            let text = "Monthly income amount is more than expenses amount. Do you want me to add that extra money as saving?";
            if (confirm(text) == true) {
                savings=savings+(monthly_income-total_expenses);
                savings1=savings*100/monthly_income;
                alert("Extra money added to saving!");
                var expensesextrasaving = 
                [{
                values: [housing1, insurance1, grociers1,entertainment1,debt1,other_essentials1,lifestyle1,savings1],
                labels: ['Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings'],
                type: 'pie'
                }];
                  
                var layout = 
                {
                    height: 600,
                    width: 800
                };
                  
                  Plotly.newPlot('myDiv', expensesextrasaving, layout);
                }
            else
                {
                    alert("Extra money did not add to saving!");
                    let unkown_money = parseInt(monthly_income-total_expenses);
                    unkown_money1=unkown_money*100/monthly_income;

                    var expenses = 
                    [{
                    values: [housing1, insurance1, grociers1,entertainment1,debt1,other_essentials1,lifestyle1,savings1,unkown_money1],
                    labels: ['Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings','Unknow'],
                    type: 'pie'
                    }];
                  
                    var layout = {
                    height: 600,
                    width: 800
                  };
                  
                  Plotly.newPlot('myDiv', expenses, layout);
                }
                
        }
// let expenses_text = document.createElement('div');
// expenses_text.innerText="I added new Paragraph";
// document.body.appendChild(expenses_text)   
        else{
        var expenses = [{
            values: [housing1, insurance1, grociers1,entertainment1,debt1,other_essentials1,lifestyle1,savings1],
            labels: ['Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings'],
            type: 'pie'
          }];
          
          var layout = {
            height: 600,
            width: 800
          };
          
          Plotly.newPlot('myDiv', expenses, layout);}
    }
}
