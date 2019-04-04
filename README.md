# Stuff I Need
This package is a combination of things that I find useful to have, borne out of copying a function or two here and there from one project to another. It's still a work in progress, but I will continue to add to it as I can and need, please feel free to suggest additions that you would like to see.

The package is broken up into a series of classes that are targeted towards being a group of related functions. Currently there are:

1. API - for things useful when working with APIs, like encoding JSON to URL encoded
2. Colours - converting hex, rgb, hsl, and generating shades of a colour (via hsl)
3. DOM - manipulation of the DOM
4. Financial - working out compound interest, loan payments, etc
5. Functions (fn) - handy things like to run a function once only and not permit again
6. Logging - a basic log messages with timestamp to a file
7. Maths - sums, averages, degrees and radians, rands that kinda thing
8. Node - things that can be handy working in node.js
9. Other - things that haven't found their own class yet (deep copy, equality check of objects and arrays, copy to clipboard from DOM)
10. Sort - the beginnings of different sort algorithms
11. Stats - mean, median, mode, standard deviation
12. Strings - change case (title, camel, pascal), truncate sentences to a limit with or without ellipsis
13. SVG - create arcs and wedges with polar coords
14. Time - add and subtract days from a date, calculate time between dates, days in a month, long day or month name

There are still a number of things that are incomplete (like sort) but already some useful pieces here. I regularly use the time stuff in particular.

### Install
$ npm i @fitzy/stuffineed
### Usage
```
import  *  as  sin  from  '@fitzy/stuffineed';

sin.time.localToUtc(some date object);
```
### Tests
npm run test