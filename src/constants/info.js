export const linearSearch = {
  meta: {
    topic: "Linear Search",
    category: "Searching Algorithms",
    difficulty: "Beginner",
    tags: ["array", "search", "iteration", "O(n)"],
  },

  introduction: {
    summary:
      "Linear search is the simplest searching algorithm. It checks every element in a list one by one, from start to finish, until it finds the target value or reaches the end.",
    analogy:
      "Imagine you lost your keys somewhere in your house. You start from the first room and check every room one by one until you find them — or confirm they're not there. That's exactly how linear search works.",
    realWorldUse: [
      "Searching through an unsorted list of names",
      "Finding a contact in a small phone book",
      "Checking if a value exists in an array before inserting it",
      "Scanning a receipt for a specific item",
    ],
  },

  howItWorks: {
    steps: [
      "Start at the first element (index 0)",
      "Compare the current element with the target value",
      "If they match, return the current index — search is complete",
      "If they don't match, move to the next element",
      "Repeat steps 2–4 until the end of the array",
      "If the end is reached without a match, return -1 (not found)",
    ],
    visual: {
      description:
        "Searching for 7 in the array [3, 9, 1, 7, 4, 6]",
      walkthrough: [
        { index: 0, value: 3,  target: 7, match: false, note: "3 ≠ 7 → keep going" },
        { index: 1, value: 9,  target: 7, match: false, note: "9 ≠ 7 → keep going" },
        { index: 2, value: 1,  target: 7, match: false, note: "1 ≠ 7 → keep going" },
        { index: 3, value: 7,  target: 7, match: true,  note: "7 = 7 → found at index 3!" },
      ],
    },
  },

  implementation: {
    javascript: {
      basic: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // found — return the index
    }
  }
  return -1; // not found
}`,

      withWhileLoop: `function linearSearchWhile(arr, target) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) return i;
    i++;
  }
  return -1;
}`,

      returnAllMatches: `function linearSearchAll(arr, target) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      results.push(i);
    }
  }
  return results; // returns [] if not found
}`,

      withObjects: `// Searching an array of objects by a property
function findByProperty(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i]; // return the whole object
    }
  }
  return null;
}

// Example usage:
const students = [
  { id: 1, name: "Aisha" },
  { id: 2, name: "Carlos" },
  { id: 3, name: "Priya" },
];
findByProperty(students, "name", "Carlos"); // → { id: 2, name: "Carlos" }`,
    },

    liveExamples: [
      {
        label: "Found",
        code: `linearSearch([10, 20, 30, 40, 50], 30)`,
        result: 2,
        explanation: "30 is at index 2",
      },
      {
        label: "Not found",
        code: `linearSearch([10, 20, 30, 40, 50], 99)`,
        result: -1,
        explanation: "99 is not in the array, so -1 is returned",
      },
      {
        label: "Empty array",
        code: `linearSearch([], 5)`,
        result: -1,
        explanation: "Nothing to search, returns -1 immediately",
      },
      {
        label: "First element",
        code: `linearSearch([7, 3, 9, 1], 7)`,
        result: 0,
        explanation: "Best case — found on the very first check",
      },
      {
        label: "Last element",
        code: `linearSearch([3, 9, 1, 7], 7)`,
        result: 3,
        explanation: "Worst case — found only after checking every element",
      },
    ],
  },

  complexity: {
    time: {
      best: {
        notation: "O(1)",
        when: "The target is the very first element",
        example: "Searching for 3 in [3, 9, 1, 7] — found immediately",
      },
      average: {
        notation: "O(n)",
        when: "The target is somewhere in the middle",
        example: "On average, you'll check about half the elements",
      },
      worst: {
        notation: "O(n)",
        when: "The target is the last element, or not in the array at all",
        example: "Searching for 7 in [3, 9, 1, 6, 2, 7] — checked every element",
      },
    },
    space: {
      notation: "O(1)",
      explanation:
        "Linear search only uses a single loop variable (i). It needs no extra memory regardless of how large the array is.",
    },
    plain: {
      summary:
        "If the array doubles in size, the search could take twice as long — it scales linearly with the input size. This is fine for small arrays, but slow for large ones.",
    },
  },

  pros: [
    "Simple to understand and implement",
    "Works on unsorted arrays — no need to sort first",
    "Works on any data type (numbers, strings, objects)",
    "No extra memory needed",
    "Practical for small datasets",
  ],

  cons: [
    "Slow for large arrays — checks every element one by one",
    "O(n) time means performance gets worse as the list grows",
    "Much slower than Binary Search when the data is sorted",
    "Not suitable for real-time or performance-critical applications with large data",
  ],

  comparison: {
    binarySearch: {
      linearSearch: {
        requires: "Unsorted or sorted array",
        timeComplexity: "O(n)",
        bestFor: "Small or unsorted datasets",
      },
      binarySearch: {
        requires: "Sorted array only",
        timeComplexity: "O(log n)",
        bestFor: "Large, sorted datasets",
      },
      verdict:
        "If your data is sorted and large, use Binary Search. If it's small or unsorted, Linear Search is perfectly fine.",
    },
  },

  commonMistakes: [
    {
      mistake: "Returning true/false instead of the index",
      wrong:  `if (arr[i] === target) return true;`,
      right:  `if (arr[i] === target) return i;`,
      why:    "Returning the index is more useful — it tells you WHERE the element is, not just that it exists.",
    },
    {
      mistake: "Off-by-one error in the loop condition",
      wrong:  `for (let i = 0; i <= arr.length; i++)`,
      right:  `for (let i = 0; i < arr.length; i++)`,
      why:    "arr[arr.length] is undefined. Using <= causes you to check one extra, non-existent element.",
    },
    {
      mistake: "Forgetting to return -1 when not found",
      wrong:  `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  // nothing returned — function returns undefined
}`,
      right:  `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1; // explicit "not found" signal
}`,
      why: "Returning undefined makes it hard for the caller to distinguish 'found at index 0' from 'not found'.",
    },
    {
      mistake: "Using == instead of ===",
      wrong:  `if (arr[i] == target)`,
      right:  `if (arr[i] === target)`,
      why:    "== does type coercion: '5' == 5 is true. Use === to compare both value and type.",
    },
  ],

  practiceProblems: [
    {
      level: "Beginner",
      title: "Find a number",
      prompt: "Write a function that takes an array of numbers and a target, and returns the index of the target. Return -1 if not found.",
      hint: "Use a for loop and compare each element with the target.",
      starterCode: `function findNumber(arr, target) {
  // your code here
}`,
    },
    {
      level: "Beginner",
      title: "Find a name",
      prompt: "Search through an array of strings and return the index of a given name. Make the search case-insensitive.",
      hint: "Convert both the element and the target to lowercase before comparing.",
      starterCode: `function findName(arr, name) {
  // your code here
}`,
    },
    {
      level: "Intermediate",
      title: "Count occurrences",
      prompt: "Return how many times a given value appears in an array.",
      hint: "Keep a counter variable and increment it every time you find a match.",
      starterCode: `function countOccurrences(arr, target) {
  // your code here
}`,
    },
    {
      level: "Intermediate",
      title: "Find last occurrence",
      prompt: "Return the index of the LAST occurrence of the target in the array.",
      hint: "Don't return immediately on a match — keep updating a variable and continue the loop.",
      starterCode: `function findLast(arr, target) {
  // your code here
}`,
    },
    {
      level: "Advanced",
      title: "Search in array of objects",
      prompt: "Given an array of student objects (each with an id and name), find and return the student with a matching id.",
      hint: "Access the property with dot notation inside your if condition.",
      starterCode: `function findStudent(students, id) {
  // your code here
}`,
    },
  ],

  quickReference: {
    signature:    "linearSearch(arr, target) → index or -1",
    bestCase:     "O(1) — first element matches",
    worstCase:    "O(n) — last element or not found",
    spaceUsed:    "O(1) — no extra memory",
    requiresSorted: false,
    returnsIndex: true,
  },
};