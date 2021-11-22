function sumSalary(salaries) {
    let result = 0;    
      for (key in salaries) {
        if (typeof(salaries[key]) == "number" && isFinite(salaries[key])) {
            result = result + salaries[key];
        };
    }
    return result;
}