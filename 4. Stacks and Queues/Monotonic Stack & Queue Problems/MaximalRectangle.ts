// https://leetcode.com/problems/maximal-rectangle/

function largestHistogram(nums: number[]): number {
    let st: number[] = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        while (st.length > 0 && nums[st[st.length - 1]] > nums[i]) {
            let x = st[st.length - 1];
            st.pop();
            max = Math.max(max, nums[x] * (i - (st.length === 0 ? -1 : st[st.length - 1]) - 1));
        }
        st.push(i);
    }
    while (st.length > 0) {
        let x = st[st.length - 1];
        st.pop();
        max = Math.max(max, nums[x] * (nums.length - (st.length === 0 ? -1 : st[st.length - 1]) - 1));
    }

    return max;
}

function maximalRectangle(matrix: string[][]): number {
    let ps: number[][] = matrix.map(row => new Array(row.length).fill(0));
    for (let j = 0; j < matrix[0].length; j++) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            sum += Number(matrix[i][j]);
            if (matrix[i][j] == '0') sum = 0;
            ps[i][j] = sum;
        }
    }
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        let ans = largestHistogram(ps[i]);
        max = Math.max(ans, max);
    }
    return max;
};