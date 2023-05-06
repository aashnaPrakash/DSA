
var calculateTaxes = function(brackets, income) {
    if(income === 0) return 0;
     if(brackets.length === 0) return 0;
    else {
        let min = Math.min(brackets[0][0], income);
        var tax = (min* brackets[0][1])/100;
        if(min == income){
            return tax;
        }
        else {
            let remIncome = Math.min(income, income-brackets[0][0]) ;
            let i=1;
            while(i<brackets.length && remIncome){
                let factor = Math.min(remIncome,brackets[i][0] - brackets[i-1][0]);
                tax = tax+ ((factor*brackets[i][1])/100);
                remIncome = remIncome - factor;
                i++;
            }
            return tax;
        }
        
    }
};

console.log(calcTaxes([[3,50],[7,10],[12,25]],10));
console.log(calculateTaxes([[2,50]],0));
console.log(calculateTaxes([[10,50]],5));