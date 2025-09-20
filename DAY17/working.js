console.log(x);
var x = 10;

// This happens because JS uses a EXECUTION CONTEXT (here memory and code are stored differently and then executed simultaneouly)
// When we Print variable before assigning it ... Then it goes in TEMPORAL DEADZONE(hence we cant access that variable)
// TEMPORAL DEADZONE will get over when its declared and assignend with any datatype

// For 'var' its UNDEFINED
// For 'let/const' its TEMPORAL DEADZONE
