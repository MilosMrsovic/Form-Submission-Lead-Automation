const time_ = inputData.time;
const spent_ = inputData.spent;

const timeClean = time_.trim();
const spentClean = spent_.trim();

let score = 0;

if (timeClean === '0-19 minutes') {
    score += 2;
} else if (timeClean === '20-59 minutes') {
    score += 2;
} else if (timeClean === '60-120 minutes') {
    score += 1;
}

if (spentClean === '$100-500') {
    score += 1;
} else if (spentClean === '$500+') {
    score += 3;
} 

return {
    score: score
};