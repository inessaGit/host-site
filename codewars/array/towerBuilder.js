/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
*/

function towerBuilder(nFloors){
    let space,star, tower = [];
    for(i = 1; i <= nFloors; i++){
      space = " ".repeat(nFloors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower;
  }  

  function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
  }

  function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }
  

towerBuilder(1);
towerBuilder(2)  ;
towerBuilder(3)  ;