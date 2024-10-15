// https://leetcode.com/problems/next-greater-element-ii/description/
function nextGreaterElements(nums: number[]): number[] {
    let n = nums.length;
    let st: number[] = [];
    let res: number[] = Array(n).fill(-1)

    for(let i = 2*n - 1 ; i >= 0 ; i--) {
        while(st.length !== 0 && nums[i%n] >= st[st.length - 1]) {
            st.pop();
        }
        if(i < n && st.length !== 0) {
            res[i] =  st[st.length - 1];
        }

        st.push(nums[i%n]);
    }
    return res;
};