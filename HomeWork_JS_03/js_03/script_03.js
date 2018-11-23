let num = prompt("Enter a positiv number", "")



function fact(x) {
    let z = 1;
    if (x == 0) {
        return document.write("Factorial " + x + " = " + 1);
    } else if (x < 0) {
        return x = prompt("Enter a positiv number, please", "")
        // как сделать что бы после этого, програма останавливалась и начиналась с начала? 
    } else {
        for (let i = 1; i <= x; i++) {
            z = z * i;
        }
        return document.write("Factorial " + x + " = " + z);
    }
}
fact(num);
