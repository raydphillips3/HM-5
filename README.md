# HM-5
Homework #5 - Work Day Scheduler

## Use moment().format(); for time and date
* display time and date in the header
## Build Timeblocks
### Each timeblock needs the hour, an input for memos, and a save button
### Memos need to save and be retrieved upon opening the scheduler
* memo data stored to and pulled from local storage
* display saved memos immediately
### compare time id of timeblock to current time 
* for loop to go through each timeblock individually
* put both (timblock id and current) times into arrays using .split 
* used if statements to compare times and set color conditions
* change textarea color as needed using .css
** Green = Future hour | Red = Current hour | Grey = Passed hour
** Updates every millisecond


![Screenshot](https://user-images.githubusercontent.com/64376825/83526593-42c8af80-a4ac-11ea-8f1c-c4a08a79b537.png)
