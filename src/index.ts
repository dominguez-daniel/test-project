import { sum, power } from './math';

const base = 10;

for (let i = 0; i < 10; i++) {
  console.log('sum=', sum(base, i));
  console.log('power=', power(base, i));
}
