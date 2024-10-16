// https://leetcode.com/problems/sum-of-subarray-minimums/description/
function findPSE(arr: number[]) {
    let res: number[] = new Array(arr.length).fill(-1);
    let st: number[] = [];

    for(let i = 0 ; i < arr.length ; i++) {
        while(st.length !== 0 && arr[st[st.length - 1]] > arr[i]) {
            st.pop();
        }
        if(st.length !== 0) {
            res[i] = st[st.length - 1];
        }
        st.push(i);
    }
    return res;
}

function findNSE(arr: number[]) {
    let res: number[] = new Array(arr.length).fill(arr.length);
    let st: number[] = [];

    for(let i = arr.length - 1 ; i >= 0 ; i--) {
        while(st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) {
            st.pop();
        }
        if(st.length !== 0) {
            res[i] = st[st.length - 1];
        }
        st.push(i);
    }
    return res;
}


function sumSubarrayMins(arr: number[]): number {
    let pseOrEqual: number[] = findPSE(arr);
    let nse: number[] = findNSE(arr);
    let total: number = 0;
    const mod = 1e9 + 7;

    for(let i = 0 ; i < arr.length ; i++) {
        let left = i - pseOrEqual[i];
        let right = nse[i] - i;
        total = (total + left * right * arr[i]) % mod;
    }
    return total;
};