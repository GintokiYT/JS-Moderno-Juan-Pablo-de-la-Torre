// Moment JS --> https://momentjs.com/

const momentTime = moment().format('dddd DD MMMM [del] YYYY hh:mm:ss a');

console.log(momentTime);

console.log('%cMomentJS Comandos ', 'background: #222; color: #bada55');

const style = 'background: #222; color: aqua; font-size: 1rem';
console.log('\t\t%cFormat Dates ', style);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // July 29th 2022, 9:21:46 pm
console.log(moment().format('dddd'));                    // Friday
console.log(moment().format("MMM Do YY"));               // Jul 29th 22
console.log(moment().format('YYYY [escaped] YYYY'));     // 2022 escaped 2022
console.log(moment().format());                          // 2022-07-29T21:21:57-05:00

console.log('\t\t%cRelative Time ', style);
console.log(moment("20111031", "YYYYMMDD").fromNow()); // 11 years ago
console.log(moment("20120620", "YYYYMMDD").fromNow()); // 10 years ago
console.log(moment().startOf('day').fromNow());        // 21 hours ago
console.log(moment().endOf('day').fromNow());          // in 3 hours
console.log(moment().startOf('hour').fromNow());       // 29 minutes ago

console.log('\t\t%cCalendar Time ', style);
console.log(moment().subtract(10, 'days').calendar()); // 07/19/2022
console.log(moment().subtract(6, 'days').calendar());  // Last Saturday at 9:33 PM
console.log(moment().subtract(3, 'days').calendar());  // Last Tuesday at 9:33 PM
console.log(moment().subtract(1, 'days').calendar());  // Yesterday at 9:33 PM
console.log(moment().calendar());                      // Today at 9:33 PM
console.log(moment().add(1, 'days').calendar());       // Tomorrow at 9:33 PM
console.log(moment().add(3, 'days').calendar());       // Monday at 9:33 PM
console.log(moment().add(10, 'days').calendar());      // 08/08/2022

console.log('\t\t%cMultiple Locale Support ', style);
console.log(moment.locale());         // en
console.log(moment().format('LT'));   // 9:35 PM
console.log(moment().format('LTS'));  // 9:35:15 PM
console.log(moment().format('L'));    // 07/29/2022
console.log(moment().format('l'));    // 7/29/2022
console.log(moment().format('LL'));   // July 29, 2022
console.log(moment().format('ll'));   // Jul 29, 2022
console.log(moment().format('LLL'));  // July 29, 2022 9:35 PM
console.log(moment().format('lll'));  // Jul 29, 2022 9:35 PM
console.log(moment().format('LLLL')); // Friday, July 29, 2022 9:35 PM
console.log(moment().format('llll')); // Fri, Jul 29, 2022 9:35 PM







