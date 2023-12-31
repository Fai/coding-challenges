function processData(input) {
    // Split input lines into an array
    const lines = input.split('\n');
    
    // Get the number of entries in the phone book
    const numEntries = parseInt(lines[0]);
    
    // Create a Map object to represent the "phone book"
    const phoneBook = new Map();
    
    // Read and add entries to the "phone book"
    for (let i = 1; i <= numEntries; i++) {
        const [name, number] = lines[i].split(' '); // Split the line into name and number
        phoneBook.set(name, number); // Add the entry to the "phone book"
    }
    
    // Process queries and print the results
    for (let i = numEntries + 1; i < lines.length; i++) { 
        const nameQuery = lines[i]; // Get the name for the query
        if (phoneBook.has(nameQuery)) {
            console.log(`${nameQuery}=${phoneBook.get(nameQuery)}`); // Print the result if found
        } else {
            console.log('Not found'); // Print "Not found" if not found
        }
    }
  }