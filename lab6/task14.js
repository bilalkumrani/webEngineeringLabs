function filterLetters(letterArr){
  let occurrences ={}
  for(let i of letterArr){
      if(occurrences[i]){
          occurrences[i] +=1;
      }
      else
      {
        occurrences[i] =1;
      }
  }
return Object.values(occurrences);
}


console.log(filterLetters(['a','a','b','b','b']))

