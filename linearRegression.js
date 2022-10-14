let age = [43, 21, 25, 42, 57, 59];
let glucose = [99, 65, 79, 75, 87, 81];

let tup = [];
for (let i = 0; i < age.length; i++) {
  tup = [...tup, [age[i], glucose[i]]];
}
let data = {
  sumx: 0,
  sumy: 0,
  sumxy: 0,
  sumxsq: 0,
  sumysq: 0,
  n: 0,
};
let coeffientFuntion = (data) => {
  const { sumx, sumy, sumxy, sumxsq, n } = data;
  let numA, numB, deno;
  numA = sumy * sumxsq - sumx * sumxy;
  deno = n * sumxsq - sumx * sumx;
  numB = n * sumxy - sumx * sumy;
  let a = numA / deno;
  let b = numB / deno;
  return [a, b];
};
// let table = tup.reduce((data, item) => {
//   data.sumx += item[0];
//   data.sumy += item[1];
//   data.sumxy += item[0] * item[1];
//   data.sumxsq += item[0] * item[0];
//   data.n += 1;
//   return data;
// }, data);
let dataSequence = []
tup.forEach((item)=>{
  data.sumx += item[0];
  data.sumy += item[1];
  data.sumxy += item[0] * item[1];
  data.sumxsq += item[0] * item[0];
  data.n += 1;
  dataSequence = [...dataSequence, coeffientFuntion(data)]
})
// Log to console
dataSequence.shift()
console.log(dataSequence);
