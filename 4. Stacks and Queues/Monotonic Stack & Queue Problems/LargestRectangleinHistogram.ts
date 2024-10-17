// https://leetcode.com/problems/largest-rectangle-in-histogram/description/
function largestRectangleArea(heights: number[]): number {
    let st: number[] = [];
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        while (st.length > 0 && heights[st[st.length - 1]] > heights[i]) {
            let x = st[st.length - 1];
            st.pop();
            max = Math.max(max, (heights[x] * (i - (st.length === 0 ? -1 : st[st.length - 1]) - 1)));
        }
        st.push(i);
    }

    while (st.length > 0) {
        let x = st[st.length - 1];
        st.pop();
        max = Math.max(max, (heights[x] * (heights.length - (st.length === 0 ? -1 : st[st.length - 1]) - 1)));
    }

    return max;
};