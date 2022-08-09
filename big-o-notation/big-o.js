/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 3 * n = O(3n)
    if (!seen[word]) {              // 3 * n = O(3n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 3 * n = O(n)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 2 * n = O(2n)
      c++                           // 2 * n = O(2n)
    ) {
      const comparing = words[c];   // 3 * n^2 = O(3n^2)
      if (comparing === word) {     // 3 * n^2 = O(3n^2)
        isUnique = false;           // 1 * 1 = O(1)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique;                    // 2 * 1 = O(2)
} // Big O Notation for uniqueQuadratic: O(2n^2)
